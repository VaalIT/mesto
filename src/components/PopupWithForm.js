import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._form.querySelectorAll('.popup__input');
        this._button = this._popup.querySelector('.popup__save-button');
        this._text = this._button.textContent;
    }

    _getInputValues() {
        const values = {};
        this._inputs.forEach(input => {
            values[input.name] = input.value
        });

        return values;
    }

    changeSubmitHandler(newSubmitHandler) {
        this._handleSubmit = newSubmitHandler
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues())
        })
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading, loadingText='Сохранение...') {
        if(isLoading) {
            this._button.textContent = loadingText;
        }
        else {
            this._button.textContent = this._text;
        }
    }
}

export default PopupWithForm;