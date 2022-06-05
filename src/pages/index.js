import './index.css';

import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js';

import { editButton,
  profileName,
  profileJob,
  nameInput,
  jobInput,
  titleInput,
  linkInput,
  popupProfile,
  buttonAddPhoto,
  popupPhoto,
  photosSection,
  initialPhotoItems
} from '../constants/constants.js';

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
});

function handlePhotoFormSubmit(data) {
  const newPhoto = createCard({
    name: data.photoName,
    link: data.photoLink,
});
  photosSection.prepend(newPhoto);
  popupWithPhotoForm.close();
};

const userData = new UserInfo({
  name: profileName,
  job: profileJob
});

editButton.addEventListener('click', () => {
  const data = userData.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
  popupWithProfileForm.open();
});

function handleProfileFormSubmit(data) {
  userData.setUserInfo(data);
  popupWithProfileForm.close();
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