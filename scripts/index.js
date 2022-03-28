import FormValidator from './FormValidator.js';
import Card from './Card.js';

const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupProfile = document.querySelector('.popup_type_profile');
const profileForm = document.querySelector('form[name="profile"]');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const addPhotoButton = document.querySelector('.profile__photo-add-button');
const popupPhoto = document.querySelector('.popup_type_photo');
const photosSection = document.querySelector('.photo');
const template = document.querySelector('.template');
const popupPhotoSaveButton = document.querySelector('button[name="save-photo"]');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');
const popupView = document.querySelector('.popup_type_view');
const popupViewPhoto = document.querySelector('.popup__view-photo');
const popupViewTitle = document.querySelector('.popup__view-title');
const formPhoto = document.querySelector('form[name="photo"]');
const popups = document.querySelectorAll('.popup');
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


function createCard(item) {
  const card = new Card(item, '.template');
  return card.generateCard();
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

popups.forEach((popup) => {
	popup.addEventListener('click', (evt) => {
		if (evt.target.classList.contains('popup_opened')) {
			closePopup(popup);
		}
		if (evt.target.classList.contains('popup__close-button')) {
		  closePopup(popup);
		}
	})
})

function openProfilePopup() { 
    profileName.textContent = nameInput.value; 
    profileJob.textContent = jobInput.value;
    openPopup(popupProfile);
}

editButton.addEventListener('click', openProfilePopup);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
} 

profileForm.addEventListener('submit', handleProfileFormSubmit);

function renderPhotoItems() {
    const photoHtml = initialPhotoItems.map (function (item) {
        createCard(item);
    });
    photosSection.append(...photoHtml);
}

renderPhotoItems();

addPhotoButton.addEventListener('click', () => openPopup(popupPhoto));

function handleAddPhotoForm(evt) { 
    evt.preventDefault();
    const newPhoto = {};
    newPhoto.name = titleInput.value; 
    newPhoto.link = linkInput.value;
    const newCard = createCard({name: newPhoto.name, link: newPhoto.link});
    photosSection.prepend(newCard);
    titleInput.value = '';
    linkInput.value = '';
    popupPhotoSaveButton.classList.add('popup__save-button_disabled');
    popupPhotoSaveButton.disabled = true;
    closePopup(popupPhoto);
}

formPhoto.addEventListener('submit', handleAddPhotoForm);
