class Card { 
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
		this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
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

  isLiked() {
    this._userLikes = this._likes.find(user => user._id === this._userId);

    return this._userLikes;
  }

  setLikes(likes) {
    this._likes = likes
    this._likeNumber.textContent = this._likes.length;

    if (this.isLiked()) {
      this._activateLike()
    } else {
      this._eraseLikeIcon()
    }
  }

  _activateLike = () => {
    this._element.querySelector('.photo__like-button').classList.add('photo__like-button_active');
}

  _disactiveLike = () => {
    this._element.querySelector('.photo__like-button').classList.remove('photo__like-button_active');
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