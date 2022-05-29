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
const profileForm = document.querySelector('form[name="profile"]'); 

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
const popupWithProfileForm = new PopupWithForm('.popup_type_profile');
const popupWithPhotoForm = new PopupWithForm('.popup_type_photo');

const handlePhotoFormSubmit = (data) => {
  popupWithPhotoForm.open();
  const newPhoto = {
    name: data.name,
    link: data.link
}
photosSection.addItem(createCard(newPhoto));
/*popupWithFormCard.closePopup();
  photosSection.addItem(createCard({
    name: data.name,
    link: data.link
  }));*/
};

const userData = new UserInfo({
  name: profileName,
  job: profileJob
});


editButton.addEventListener('click', () => {
  popupWithProfileForm.open();
  const info = userData.getUserInfo();
  nameInput.value = info.name;
  jobInput.value = info.job;
  
});

function handleProfileFormSubmit(data) {
  userData.setUserInfo(data);
  popupWithProfileForm.close();
};

profileForm.addEventListener('submit', handleProfileFormSubmit); 

/*editButton.addEventListener('click', handleProfileFormSubmit);*/
addPhotoButton.addEventListener('click', handlePhotoFormSubmit);
popupWithImage.setEventListeners();


  
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