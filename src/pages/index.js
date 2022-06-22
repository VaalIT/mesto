import './index.css';

import Api from '../components/Api.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import { editButton,
  nameInput,
  aboutInput,
  titleInput,
  linkInput,
  popupProfile,
  buttonAddPhoto,
  popupPhoto,
  profileAvatar,
  popupAvatar,
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
    section.renderItems(cards.reverse());
  })
  .catch(err => {
    console.log(err)
  });

editButton.addEventListener('click', () => {
  const { name, about } = userData.getUserInfo();
  nameInput.value = data.name;
  aboutInput.value = data.about;
  popupWithProfileForm.open();
  editProfileValidator.restartValidation();
});

function handleProfileFormSubmit(data) {
  popupWithProfileForm.renderLoading(true)
  const {name, about} = data;
  api.changeUserInfo(name, about)
    .then(() => {
      userData.setUserInfo({name, about});
      popupWithProfileForm.close()
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      popupWithProfileForm.renderLoading(false)
    })
};

const createCard = (data) => {
  const card = new Card(
    {...data, userId},
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
  renderer: (item) => {
    section.addItem(createCard(item));
  }},
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
  popupWithPhotoForm.renderLoading(true)
  api.addCard(data)
    .then(res => {
      const newPhoto = createCard(res);
      section.addItem(newPhoto);
      popupWithPhotoForm.close();
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      popupWithPhotoForm.renderLoading(false)
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

profileAvatar.addEventListener('click', () => {
  urlAvatarInput.value = '';
  editAvatarValidator.restartValidation();
  popupEditAvatar.open();
});

function handleEditAvatarSubmit(data) {
  popupEditAvatar.renderLoading(true)
  api.editAvatar(data)
    .then(res => {
      userData.setUserAvatar(res.avatar);
      popupEditAvatar.close();
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      popupEditAvatar.renderLoading(false)
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
