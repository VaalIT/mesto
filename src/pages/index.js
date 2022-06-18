import './index.css';

import Api from '../scripts/Api.js';
import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js';

import { editButton,
  profileName,
  profileAbout,
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
  likeNumber
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

Promise.all([ api.getUserInfo(), api.getInitialCards()])
  .then(([ data, cards ]) => {
    userData.setUserInfo(data);
    userData.setUserAvatar(data.avatar);
    userId = data._id;
    
    cards.forEach(data => {
      const card = {
        likes: data.likes,
        id: data._id,
        name: data.name,
        link: data.link
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
/*
function handleProfileFormSubmit(data) {
  userData.setUserInfo(data);
  popupWithProfileForm.close();
};*/

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

const createCard = (item) => {
  const card = new Card(
    item,
    '.template',
    (link, name) => { popupWithImage.open(link, name) }
  );

  return card.generateCard();
};
  
const section = new Section({
  items: initialPhotoItems,
  renderer: createCard,
  },
  '.photo'
);
    
section.renderItems();

const popupWithImage = new PopupWithImage('.popup_type_view');
const popupWithProfileForm = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit);
const popupWithPhotoForm = new PopupWithForm('.popup_type_photo', handlePhotoFormSubmit);

buttonAddPhoto.addEventListener('click', () => {
  titleInput.value = '';
  linkInput.value = '';
  popupWithPhotoForm.open();
  addCardValidator.restartValidation();
});

function handlePhotoFormSubmit(data) {
  const newPhoto = createCard({
    name: data.photoName,
    link: data.photoLink,
});
  photosSection.prepend(newPhoto);
  popupWithPhotoForm.close();
};



popupWithImage.setEventListeners();
popupWithProfileForm.setEventListeners();
popupWithPhotoForm.setEventListeners();

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