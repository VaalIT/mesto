(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const t=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var n,r;return n=t,(r=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"changeUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._handleResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showError",(function(e,t){var n=o._formItem.querySelector("#".concat(e.id,"-error"));n.classList.add(o._errorClass),n.textContent=t,e.classList.add(o._inputErrorClass)})),r(this,"_hideError",(function(e){var t=o._formItem.querySelector("#".concat(e.id,"-error"));t.classList.remove(o._errorClass),t.textContent="",e.classList.remove(o._inputErrorClass)})),r(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideError(e):o._showError(e,e.validationMessage)})),r(this,"_setEventListeners",(function(){o.toggleButtonState(),o._inputList.forEach((function(e){e.value&&o._checkInputValidity(e),e.addEventListener("input",(function(){o._checkInputValidity(e),o.toggleButtonState()}))}))})),r(this,"enableValidation",(function(){o._formItem.addEventListener("submit",(function(e){e.preventDefault()})),o._setEventListeners()})),r(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),r(this,"toggleButtonState",(function(){o._hasInvalidInput(o._inputList)?(o._buttonItem.classList.add(o._inactiveButtonClass),o._buttonItem.disabled=!0):(o._buttonItem.classList.remove(o._inactiveButtonClass),o._buttonItem.disabled=!1)})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formItem=n,this._inputList=Array.from(this._formItem.querySelectorAll(this._inputSelector)),this._buttonItem=this._formItem.querySelector(this._submitButtonSelector)}var t,o;return t=e,(o=[{key:"restartValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideError(t)}))}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const a=function(){function e(t,n,r,o,i){var a,s,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s=function(){u._element.remove(),u._element=null},(a="deleteCard")in this?Object.defineProperty(this,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):this[a]=s,this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t.id,this._userId=t.userId,this._ownerId=t.ownerId,this._templateSelector=n,this._handleCardClick=r,this._handleDeleteSubmit=o,this._handleLikeClick=i}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(".template").content.querySelector(".photo__item").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".photo__delete-button").addEventListener("click",(function(){e._handleDeleteSubmit(e._id)})),this._element.querySelector(".photo__image").addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),this._element.querySelector(".photo__like-button").addEventListener("click",(function(){e._handleLikeClick(e._id)}))}},{key:"isLiked",value:function(){var e=this;return this._userLikes=this._likes.find((function(t){return t._id===e._userId})),this._userLikes}},{key:"setLikes",value:function(e){this._likes=e,this._likeNumber.textContent=this._likes.length,this.isLiked()?this._element.querySelector(".photo__like-button").classList.add("photo__like-button_active"):this._element.querySelector(".photo__like-button").classList.remove("photo__like-button_active")}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".photo__image");return e.src=this._link,e.alt="Фото "+this._name+".",this._element.querySelector(".photo__title").textContent=this._name,this._ownerId!==this._userId&&(this._element.querySelector(".photo__delete-button").style.display="none"),this._element}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}const y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._form.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"changeSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;p(_(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){p(_(a.prototype),"close",this).call(this),this._form.reset()}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}const E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__view-photo"),t._name=t._popup.querySelector(".popup__view-title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=e,this._image.alt="Фото "+t+".",this._name.textContent=t,b(w(a.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const C=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e.addItem(e._renderer(t))}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const j=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatar.style.backgroundImage="url(".concat(e,")")}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var I=document.querySelector(".profile__edit-button"),P=document.querySelector(".popup__input_type_name"),q=document.querySelector(".popup__input_type_about"),R=document.querySelector(".popup__input_type_title"),U=document.querySelector(".popup__input_type_link"),T=document.querySelector(".popup_type_profile"),x=document.querySelector(".profile__photo-add-button"),B=document.querySelector(".popup_type_photo"),A=document.querySelector(".photo"),V=(document.querySelector(".profile__avatar"),document.querySelector(".popup_type_avatar")),D=document.querySelector(".profile__avatar-edit-button");function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector('.popup__input_type_link[name="url"]');var H,J=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"55e9d13b-b2e4-4190-948b-7d1e9efb302f","Content-Type":"application/json"}}),z=new j({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar"});Promise.all([J.getUserInfo(),J.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];z.setUserInfo(o),z.setUserAvatar(o.avatar),H=o._id,i.forEach((function(e){var t={name:e.name,link:e.link,likes:e.likes,id:e._id,userId:H,ownerId:e.owner._id};$.addItem(M(t))}))})).catch((function(e){console.log(e)})),I.addEventListener("click",(function(){var e=z.getUserInfo();P.value=e.name,q.value=e.about,G.open(),Z.restartValidation()}));var M=function(e){var t=new a(e,".template",(function(e,t){F.open(e,t)}),(function(e){!function(e,t){Q.open(),Q.changeSubmitHandler((function(){J.deleteCard(e).then((function(e){t.deleteCard(),Q.close()})).catch((function(e){console.log(e)}))}))}(e,t)}),(function(e){!function(e,t){t.isLiked()?J.deleteLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)})):J.addLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)}))}(e,t)}));return t.generateCard()},$=new C({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:M},".photo");$.renderItems();var F=new E(".popup_type_view"),G=new y(".popup_type_profile",(function(e){var t=e.name,n=e.about;J.changeUserInfo(t,n).then((function(){z.setUserInfo(t,n),G.close()})).catch((function(e){console.log(e)}))})),K=new y(".popup_type_photo",(function(e){J.addCard(e).then((function(e){var t=M({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:H,ownerId:e.owner._id});A.prepend(t),K.close()})).catch((function(e){console.log(e)}))})),Q=new y(".popup_type_delete"),W=new y(".popup_type_avatar",(function(e){J.editAvatar(e).then((function(e){z.setUserAvatar(e.avatar),W.close()})).catch((function(e){console.log(e)}))}));x.addEventListener("click",(function(){R.value="",U.value="",K.open(),Y.restartValidation()})),D.addEventListener("click",(function(){W.open()})),F.setEventListeners(),G.setEventListeners(),K.setEventListeners(),Q.setEventListeners(),W.setEventListeners();var X={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Y=new o(X,B.querySelector(".popup__form"));Y.enableValidation();var Z=new o(X,T.querySelector(".popup__form"));Z.enableValidation(),new o(X,V.querySelector(".popup__form")).enableValidation()})();
//# sourceMappingURL=main.js.map