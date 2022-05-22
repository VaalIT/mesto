class Card { 
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
		this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() { 
    const cardItem = document
      .querySelector('.template')
      .content
      .querySelector('.photo__item')
      .cloneNode(true); 

    this._element = cardItem;
  } 

  _setEventListeners() {
		this._element.querySelector('.photo__delete-button').addEventListener('click', () => {
			this._element.remove();
      this._element = null;
		});

    this._element.querySelector('.photo__image').addEventListener('click', () => {
			this._cardItemClick();
		}); 

    this._element.querySelector('.photo__like-button').addEventListener('click', () => {
			this._element.querySelector('.photo__like-button').classList.toggle('photo__like-button_active');
		});
	} 

  _cardItemClick() {
    const popupViewPhoto = document.querySelector('.popup__view-photo'); 
    const popupViewTitle = document.querySelector('.popup__view-title'); 

    popupViewTitle.textContent = this._name;
    popupViewPhoto.alt = 'Фото ' + this._name + '.';
    popupViewPhoto.src = this._link; 

    this._handleCardClick;
  } 

  generateCard() {
    this._getTemplate();
    this._setEventListeners(); 

    const photoImage = this._element.querySelector('.photo__image');

    photoImage.src = this._link;
	  photoImage.alt = 'Фото ' + this._name + '.';
	  this._element.querySelector('.photo__title').textContent = this._name;

    return this._element;
  }
} 

export default Card; 