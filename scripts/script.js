let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let popupCloseButton = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let popupSaveButton = document.querySelector('.popup__save-button');

function popupClose() { 
    popup.classList.remove('popup_opened'); 
}

function popupOpen() { 
    popup.classList.add('popup_opened');
    profileName.textContent = nameInput.value; 
    profileJob.textContent = jobInput.value;
    popupSaveButton.addEventListener('click', popupClose);
} 

editButton.addEventListener('click', popupOpen);

popupCloseButton.addEventListener('click', popupClose); 

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose()
}

formElement.addEventListener('submit', formSubmitHandler);