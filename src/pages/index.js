import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js';
import './index.css';

const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileForm = document.querySelector('form[name="profile"]');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const addPhotoButton = document.querySelector('.profile__photo-add-button');
const photosSection = document.querySelector('.photo');
const popupPhotoSaveButton = document.querySelector('button[name="save-photo"]');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');
const formPhoto = document.querySelector('form[name="photo"]');
const popupViewPhoto = document.querySelector('.popup__view-photo');
const popupViewTitle = document.querySelector('.popup__view-title');
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
  const card = new Card({
    data: item,
    popupSelector: '.template',
    handleCardClick: () => popupWithImage.open(item)
  });
  return card.generateCard();
}

const section = new Section({
  items: initialPhotoItems,
  renderer: createCard,
  },
  photosSection
)
  
section.renderItems();

const handlePhotoFormSubmit = (data) => {
	section.addItem(createCard({
		name: data.name,
		link: data.link
	}))
	popupWithPhotoForm.close();
}

const userInfo = new UserInfo({
	name: profileName,
	job: profileJob
})

const handleProfileFormSubmit = (data) => {
  popupWithProfileForm.open();
	const { name, job } = data;
	userInfo.setUserInfo(name, job);
	popupWithProfileForm.close();
}

const popupWithImage = new PopupWithImage('.popup_type_view');
const popupWithProfileForm = new PopupWithForm('.popup_type_profile');
const popupWithPhotoForm = new PopupWithForm('.popup_type_photo');

editButton.addEventListener('click', handleProfileFormSubmit);
addPhotoButton.addEventListener('click', handlePhotoFormSubmit);

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'};

const addCardForm = popupPhoto.querySelector('.popup__form');
const addCardValidator = new FormValidator(config, addCardForm);
addCardValidator.enableValidation();

const editProfileForm = popupProfile.querySelector('.popup__form');
const editProfileValidator = new FormValidator(config, editProfileForm);
editProfileValidator.enableValidation();

export { popupViewPhoto, popupViewTitle };