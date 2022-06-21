class Card { 
  constructor(data, templateSelector, handleCardClick, handleDeleteSubmit, handleLikeClick) {
    this._name = data.name;
		this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteSubmit = handleDeleteSubmit;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() { 
    const cardItem = document
      .querySelector('.template')
      .content
      .querySelector('.photo__item')
      .cloneNode(true); 

    return cardItem;
  }
  
  deleteCard = () => {
    this._element.remove();
    this._element = null;
  }
  
  _setEventListeners() {
		this._element.querySelector('.photo__delete-button').addEventListener('click', () => {
			this._handleDeleteSubmit(this._id);
		});

    this._element.querySelector('.photo__image').addEventListener('click', () => {
			this._handleCardClick(this._link, this._name);
		}); 

    this._element.querySelector('.photo__like-button').addEventListener('click', () => {
			this._handleLikeClick(this._id);
		});
	}

  isLiked() {
    this._userLikes = this._likes.find(user => user._id === this._userId);

    return this._userLikes;
  }

  setLikes(likes) {
    this._likes = likes;
    this._element.querySelector('.photo__like-number').textContent = this._likes.length;

    if (this.isLiked()) {
      this._element.querySelector('.photo__like-button').classList.add('photo__like-button_active');
    } else {
      this._element.querySelector('.photo__like-button').classList.remove('photo__like-button_active');
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(); 

    const photoImage = this._element.querySelector('.photo__image');
    photoImage.src = this._link;
	  photoImage.alt = 'Фото ' + this._name + '.';
	  this._element.querySelector('.photo__title').textContent = this._name;

    this.setLikes(this._likes);

    if (this._ownerId !== this._userId) {
      this._element.querySelector('.photo__delete-button').style.display = 'none'
  }

    return this._element;
  }
} 

export default Card; 