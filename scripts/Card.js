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
			this._handleCardClick(this._link, this._name);
		}); 

    this._element.querySelector('.photo__like-button').addEventListener('click', () => {
			this._element.querySelector('.photo__like-button').classList.toggle('photo__like-button_active');
		});
	} 
/*
  _handleCardClick() {
    this._element.querySelector('.popup__view-photo').src = this._link; 
    this._element.querySelector('.popup__view-photo').alt = 'Фото ' + this._name + '.';
    this._element.querySelector('.popup__view-title').textContent = this._name;
  } 
*/
  generateCard() {
    this._getTemplate();
    this._setEventListeners(); 

    this._element.querySelector('.photo__image').src = this._link;
	  this._element.querySelector('.photo__image').alt = 'Фото ' + this._name + '.';
	  this._element.querySelector('.photo__title').textContent = this._name;

    return this._element;
  }
} 

export default Card; 