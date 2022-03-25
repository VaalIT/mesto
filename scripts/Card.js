class Card {
  constructor(newPhoto, templateSelector) {
    this._name = newPhoto.name;
		this._link = newPhoto.link;
    this._template = document.querySelector(templateSelector).content;
  }

  _getTemplate() {
    const cardItem = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.photo__item')
      .cloneNode(true);

    this._element = cardItem;
  }

  _setEventListeners() {
		this._element.querySelector('.photo__delete-button').addEventListener('click', () => {
			this._cardItemDelete();
		});
    
    this._element.querySelector('.photo__image').addEventListener('click', () => {
			this._cardItemClick();
		});

    this._element.querySelector('.photo__like-button').addEventListener('click', () => {
			this._cardItemLike();
		});
	}

  _cardItemClick() {
    openPopup(popup);
    photoTitle.textContent = this._name;
    photoImage.alt = this._name;
    photoImage.src = this._link;
  }

  __cardItemDelete() {
    this._element.remove();
  }

  _cardItemLike() {
    this._element.querySelector('.photo__like-button').classList.toggle('photo__like-button_active');
  }

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