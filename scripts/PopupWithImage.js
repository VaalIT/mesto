import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__view-photo');
        this._name = this._popup.querySelector('.popup__view-title');
      }
    
      open({ link, alt, name }) {
        this._image.src = link;
        this._image.alt = alt;
        this._name.textContent = name;
        super.open();
      }
}

export default PopupWithImage;