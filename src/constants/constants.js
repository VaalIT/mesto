export const editButton = document.querySelector('.profile__edit-button'); 
export const profileName = document.querySelector('.profile__name'); 
export const profileAbout = document.querySelector('.profile__about'); 
export const nameInput = document.querySelector('.popup__input_type_name');
export const aboutInput = document.querySelector('.popup__input_type_about');
export const titleInput = document.querySelector('.popup__input_type_title');
export const linkInput = document.querySelector('.popup__input_type_link');
export const popupProfile = document.querySelector('.popup_type_profile'); 
export const buttonAddPhoto = document.querySelector('.profile__photo-add-button'); 
export const popupPhoto = document.querySelector('.popup_type_photo'); 
export const photosSection = document.querySelector('.photo');
export const profileAvatar = document.querySelector('.profile__avatar');
export const likeNumber = document.querySelector('.photo__like-number');

export const initialPhotoItems = [
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