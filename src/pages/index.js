import './index.css';

import Api from '../scripts/Api.js';
import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js';

import { editButton,
  nameInput,
  aboutInput,
  titleInput,
  linkInput,
  popupProfile,
  buttonAddPhoto,
  popupPhoto,
  photosSection,
  initialPhotoItems,
  profileAvatar,
  popupAvatar,
  editAvatarButton,
  urlAvatarInput
} from '../constants/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: '55e9d13b-b2e4-4190-948b-7d1e9efb302f',
    'Content-Type': 'application/json'
  }
});

const userData = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__about',
  avatarSelector: '.profile__avatar'
});

let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, cards]) => {
    userData.setUserInfo(data);
    userData.setUserAvatar(data.avatar);
    userId = data._id;
    
    cards.forEach(data => {
      const card = {
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id,
      }
      section.addItem(createCard(card));
    })
  })
  .catch(err => {
    console.log(err)
  });

editButton.addEventListener('click', () => {
  const data = userData.getUserInfo();
  nameInput.value = data.name;
  aboutInput.value = data.about;
  popupWithProfileForm.open();
  editProfileValidator.restartValidation();
});

function handleProfileFormSubmit(data) {
  const {name, about} = data;
  api.changeUserInfo(name, about)
    .then(() => {
      userData.setUserInfo(name, about);
      popupWithProfileForm.close()
    })
    .catch(err => {
      console.log(err)
    })
};

const createCard = (data) => {
  const card = new Card(
    data,
    '.template',
    (name, link) => {
      popupWithImage.open(name, link);
    },
    (id) => {
      handleDeleteSubmit(id, card);
    },
    (id) => {
      handleLikeClick(id, card);
    },
  );

  return card.generateCard();
};

const section = new Section({
  renderer: createCard,
  },
  '.photo'
);

const popupWithImage = new PopupWithImage('.popup_type_view');
const popupWithProfileForm = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit);
const popupWithPhotoForm = new PopupWithForm('.popup_type_photo', handlePhotoFormSubmit);
const popupDeletePhoto = new PopupWithForm('.popup_type_delete');
const popupEditAvatar = new PopupWithForm('.popup_type_avatar', handleEditAvatarSubmit);

buttonAddPhoto.addEventListener('click', () => {
  titleInput.value = '';
  linkInput.value = '';
  popupWithPhotoForm.open();
  addCardValidator.restartValidation();
});

function handlePhotoFormSubmit(data) {
  api.addCard(data)
    .then(res => {
      const newPhoto = createCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id,
        userId: userId,
        ownerId: res.owner._id
      })
      photosSection.prepend(newPhoto);
      popupWithPhotoForm.close();
    })
    .catch(err => {
      console.log(err)
    })
}

function handleDeleteSubmit(id, card) {
  popupDeletePhoto.open();
  popupDeletePhoto.changeSubmitHandler(() => {
    api.deleteCard(id)
      .then(res => {
        card.deleteCard();
        popupDeletePhoto.close();
      })
      .catch(err => {
        console.log(err)
      })
  });
}

function handleLikeClick(id, card) {
  if (card.isLiked()) {
    api.deleteLike(id)
      .then(res => {
        card.setLikes(res.likes)
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    api.addLike(id)
      .then(res => {
        card.setLikes(res.likes)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

editAvatarButton.addEventListener('click', () => {
  urlAvatarInput.value = '';
  editAvatarValidator.restartValidation();
  popupEditAvatar.open();
});

function handleEditAvatarSubmit(data) {
  api.editAvatar(data)
    .then(res => {
      userData.setUserAvatar(res.avatar);
      popupEditAvatar.close();
    })
    .catch(err => {
      console.log(err)
    })
}

popupWithImage.setEventListeners();
popupWithProfileForm.setEventListeners();
popupWithPhotoForm.setEventListeners();
popupDeletePhoto.setEventListeners();
popupEditAvatar.setEventListeners();

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
  
const addCardForm = popupPhoto.querySelector('.popup__form');
const addCardValidator = new FormValidator(config, addCardForm);
addCardValidator.enableValidation();
  
const editProfileForm = popupProfile.querySelector('.popup__form');
const editProfileValidator = new FormValidator(config, editProfileForm);
editProfileValidator.enableValidation();

const editAvatarForm = popupAvatar.querySelector('.popup__form');
const editAvatarValidator = new FormValidator(config, editAvatarForm);
editAvatarValidator.enableValidation();
