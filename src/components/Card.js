class Card { 
  constructor(data, templateSelector, handleCardClick, handleDeleteSubmit, handleLikeClick) {
    this._name = data.name;
		this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = data.userId;
    this._ownerId = data.owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteSubmit = handleDeleteSubmit;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() { 
    const cardItem = document
      .querySelector('.template')
      .content
      .querySelector('.card')
      .cloneNode(true); 

    return cardItem;
  }
  
  deleteCard = () => {
    this._element.remove();
    this._element = null;
  }
  
  _setEventListeners() {
		this._element.querySelector('.card__delete-button').addEventListener('click', () => {
			this._handleDeleteSubmit(this._id);
		});

    this._element.querySelector('.card__image').addEventListener('click', () => {
			this._handleCardClick(this._link, this._name);
		}); 

    this._element.querySelector('.card__like-button').addEventListener('click', () => {
			this._handleLikeClick(this._id);
		});
	}

  isLiked() {
    return this._likes.find(user => user._id === this._userId);
  }

  _changeLikesCounter() {
    this._element.querySelector('.card__like-number').textContent = this._likes.length;
  }

  _changeLikeStatus() {
    this._likeButton = this._element.querySelector('.card__like-button');

    if (this.isLiked()) {
      this._likeButton.classList.add('card__like-button_active');
    } else {
      this._likeButton.classList.remove('card__like-button_active');
    }
  }

  setLikes(likes) {
    this._likes = likes;
    this._changeLikesCounter();
    this._changeLikeStatus();
  }

  _hideNotOwnerTrash() {
    if (this._ownerId !== this._userId) {
      this._element.querySelector('.card__delete-button').style.display = 'none'
    }
  }
  
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(); 

    this._photoImage = this._element.querySelector('.card__image');
    this._photoImage.src = this._link;
	  this._photoImage.alt = `Фото ${this._name}.`;
	  this._element.querySelector('.card__title').textContent = this._name;

    this.setLikes(this._likes);

    this._hideNotOwnerTrash();

    return this._element;
  }
} 

export default Card; 