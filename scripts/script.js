// попап редактирования профиля

const profileElement = document.querySelector('.profile__button-info');
const popupElement = document.querySelector('.popup_type_profile');
const popupCloseElement = popupElement.querySelector('.popup__close-btn');

const formElement = popupElement.querySelector('.popup__form');
const nameInput = formElement.querySelector('#contentname');
const jobInput = formElement.querySelector('#occupation');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


function openPopup() {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

profileElement.addEventListener('click', openPopup);
popupCloseElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


//попап добавления карточки


const addCard = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('.popup_type_card');
const popupCloseCard = popupCard.querySelector('.popup__close-btn');

const formCard = popupCard.querySelector('.popup__form');
const placeInput = formCard.querySelector('#cardname');
const imageInput = formCard.querySelector('#link');


function openCardPopup() {
  popupCard.classList.add('popup_opened');

}

function closeCardPopup() {
  popupCard.classList.remove('popup_opened');
}

addCard.addEventListener('click', openCardPopup);
popupCloseCard.addEventListener('click', closeCardPopup);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardContainer = document.querySelector('.gallery');

const cardTemplate = document.querySelector('#new-card').content.querySelector('.gallery__item');

const handleLikeCard = (event) => {
  event.target.closest('.gallery__button-like').classList.toggle('gallery__button-like_active');
}

const handleDeleteCard = (event) => {
  event.target.closest('.gallery__item').remove();
}

const renderImage = (dataCard) => {
  openedImage.src = dataCard.link;
  openedImageTitle.textContent = dataCard.name;
}

const generateCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true);

  const name = newCard.querySelector('.gallery__item-title');
  name.textContent = dataCard.name;

  const buttonDeleteCard = newCard.querySelector('.gallery__button-delete');
  buttonDeleteCard.addEventListener('click', handleDeleteCard);

  const likeButton = newCard.querySelector('.gallery__button-like');
  likeButton.addEventListener('click', handleLikeCard);

  const image = newCard.querySelector('.gallery__image');
  image.src = dataCard.link;

  image.addEventListener('click', () => {
    openImagePopup();
    renderImage(dataCard);
  });

  return newCard;
}

const handleSubmitAddCardForm = (event) => {
  event.preventDefault();
  renderCard({ name: placeInput.value, link: imageInput.value });
  placeInput.value = '';
  imageInput.value = '';
  closeCardPopup()
};

const renderCard = (dataCard) => {
  cardContainer.prepend(generateCard(dataCard));
};

formCard.addEventListener("submit", handleSubmitAddCardForm);

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});

// попап с картинкой

const popupImage = document.querySelector('.popup_type_image');
const openedImage = popupImage.querySelector('.popup__open-image');
const openedImageTitle = popupImage.querySelector('.popup__image-title');
const popupCloseImage = popupImage.querySelector('.popup__close-btn');

function openImagePopup() {
  popupImage.classList.add('popup_opened');
}

function closeImagePopup() {
  popupImage.classList.remove('popup_opened');
}

popupCloseImage.addEventListener('click', closeImagePopup);
