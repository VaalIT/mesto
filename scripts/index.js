import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js';

const editButton = document.querySelector('.profile__edit-button'); 
const profileName = document.querySelector('.profile__name'); 
const profileJob = document.querySelector('.profile__job'); 
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');
const popupProfile = document.querySelector('.popup_type_profile'); 
const addPhotoButton = document.querySelector('.profile__photo-add-button'); 
const popupPhoto = document.querySelector('.popup_type_photo'); 
const photosSection = document.querySelector('.photo');

const initialPhotoItems = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  }, 

  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  }, 

  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  }, 

  {
    name: 'Камчатка', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' 
  }, 

  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  }, 

  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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
  photosSection
);
    
section.renderItems();

const popupWithImage = new PopupWithImage('.popup_type_view');
const popupWithProfileForm = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit);
const popupWithPhotoForm = new PopupWithForm('.popup_type_photo', handlePhotoFormSubmit);

addPhotoButton.addEventListener('click', () => {
  titleInput.value = '';
  linkInput.value = '';
  popupWithPhotoForm.open();
});

function handlePhotoFormSubmit() {
  const newPhoto = createCard({
    link: linkInput.value,
    name: titleInput.value
  });
  photosSection.prepend(newPhoto);
  popupWithPhotoForm.close();
};

const userData = new UserInfo({
  name: profileName,
  job: profileJob
});

editButton.addEventListener('click', () => {
  popupWithProfileForm.open();
  const data = userData.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
});

function handleProfileFormSubmit() {
  const info = { profileName: nameInput.value,
  profileJob: jobInput.value };
  userData.setUserInfo(info);
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