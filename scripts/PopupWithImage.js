import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__view-photo');
        this._name = this._popup.querySelector('.popup__view-title');
      }
    
      open({ link, name }) {
        super.open();
        this._image.src = link;
        this._image.alt = 'Фото ' + this._name + '.';
        this._name.textContent = name;
      }
}

export default PopupWithImage;