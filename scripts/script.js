const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupProfile = document.querySelector('.popup_type_profile');
const formElement = document.querySelector('form[name="profile"]');
const popupProfileCloseButton = document.querySelector('button[name="close-profile"]');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupProfileSaveButton = document.querySelector('button[name="save-profile"]');
const addPhotoButton = document.querySelector('.profile__photo-add-button');
const popupPhoto = document.querySelector('.popup_type_photo');
const photo = document.querySelector('.photo');
const template = document.querySelector('.template');
const popupPhotoCloseButton = document.querySelector('button[name="close-photo"]');
const popupPhotoSaveButton = document.querySelector('button[name="save-photo"]');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');
const popupView = document.querySelector('.popup_type_view');
const popupViewPhoto = document.querySelector('.popup__view-photo');
const popupViewTitle = document.querySelector('.popup__view-title');
const popupViewCloseButton = document.querySelector('button[name="close-view"]');
const formPhoto = document.querySelector('form[name="photo"]');
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

function popupProfileClose() { 
    popupProfile.classList.remove('popup_opened'); 
}

function popupProfileOpen() { 
    popupProfile.classList.add('popup_opened');
    profileName.textContent = nameInput.value; 
    profileJob.textContent = jobInput.value;
}

editButton.addEventListener('click', popupProfileOpen);

popupProfileCloseButton.addEventListener('click', popupProfileClose); 

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupProfileClose()
}

formElement.addEventListener('submit', formSubmitHandler);

function renderPhotoItems() {
    const photoHtml = initialPhotoItems.map (function (item) {
        return getItem(item);
    });
    photo.append(...photoHtml);
}

renderPhotoItems();

function getItem(item) {
    const photoItem = template.content.cloneNode(true);
    const photoImage = photoItem.querySelector('.photo__image');
    photoImage.src = item.link;
    photoImage.alt = 'Фото ' + item.name + '.';
    const photoTitle = photoItem.querySelector('.photo__title');
    photoTitle.textContent = item.name;

    const deletePhotoButton = photoItem.querySelector('.photo__delete-button');
    deletePhotoButton.addEventListener('click', deleteItem);

    const likeButton = photoItem.querySelector('.photo__like-button');
    likeButton.addEventListener('click', function(evt) {
        likeButton.classList.add('photo__like-button_active');
    }); 

    photoImage.addEventListener('click', function(evt) {
        popupViewOpen();
		popupViewPhoto.src = photoImage.src;
        popupViewTitle.textContent = photoTitle.textContent;
    });

    return photoItem;
}

function popupViewClose() { 
    popupView.classList.remove('popup_opened'); 
}

popupViewCloseButton.addEventListener('click', popupViewClose); 

function popupViewOpen() { 
    popupView.classList.add('popup_opened');
}

function deleteItem(evt) {
    const target = evt.target;
    const lastItem = target.closest('.photo__item');
    lastItem.remove();
}

function popupPhotoOpen() {
    popupPhoto.classList.add('popup_opened');
}

function popupPhotoClose() { 
    popupPhoto.classList.remove('popup_opened'); 
}

addPhotoButton.addEventListener('click', popupPhotoOpen);

popupPhotoCloseButton.addEventListener('click', popupPhotoClose); 

function popupAddPhoto(evt) { 
    evt.preventDefault();
    const newPhotoTitle = titleInput.value; 
    const newPhotoLink = linkInput.value;
    const newItem = getItem({name: newPhotoTitle, link: newPhotoLink});
    photo.prepend(newItem);
    titleInput.value = '';
    linkInput.value = '';
    popupPhotoClose();
}

formPhoto.addEventListener('submit', popupAddPhoto);
