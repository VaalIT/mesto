export const editButton = document.querySelector('.profile__edit-button'); 
export const nameInput = document.querySelector('.popup__input_type_name');
export const aboutInput = document.querySelector('.popup__input_type_about');
export const titleInput = document.querySelector('.popup__input_type_title');
export const linkInput = document.querySelector('.popup__input_type_link');
export const popupProfile = document.querySelector('.popup_type_profile'); 
export const buttonAddPhoto = document.querySelector('.profile__photo-add-button'); 
export const popupPhoto = document.querySelector('.popup_type_photo'); 
export const photosSection = document.querySelector('.photo');
export const profileAvatar = document.querySelector('.profile__avatar');
export const popupAvatar = document.querySelector('.popup_type_avatar');
export const editAvatarButton = document.querySelector('.profile__avatar-edit-button');
export const urlAvatarInput = document.querySelector('.popup__input_type_link[name="url"]');

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