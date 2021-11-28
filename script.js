let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElement = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.popup__name-input');
let jobInput = document.querySelector('.popup__job-input');
let popupSaveButton = document.querySelector('.popup__save-button');

function popupOpen() {
    formElement.classList.add('popup_opened');
}

editButton.addEventListener('click', popupOpen);

function popupClose() {
    formElement.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', popupClose);

function editProfile() {
    popupOpen();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose();
}

popupSaveButton.addEventListener('click', editProfile);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);