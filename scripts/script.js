//попап редактирования профиля

const profileEditButton = document.querySelector('.profile__button-info');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCloseProfileButton = popupProfile.querySelector('.popup__close-btn');

const formProfile = popupProfile.querySelector('.popup__form');
const nameInput = formProfile.querySelector('#contentname');
const jobInput = formProfile.querySelector('#occupation');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile);
}

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupProfile);
});
popupCloseProfileButton.addEventListener('click', () => closePopup(popupProfile));
formProfile.addEventListener('submit', formSubmitHandler);


//попап добавления карточки


const addCardButton = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('.popup_type_card');
const popupCloseCard = popupCard.querySelector('.popup__close-btn');

const formCard = popupCard.querySelector('.popup__form');
const placeInput = formCard.querySelector('#cardname');
const imageInput = formCard.querySelector('#link');

addCardButton.addEventListener('click', () => openPopup(popupCard));
popupCloseCard.addEventListener('click', () => closePopup(popupCard));

const cardContainer = document.querySelector('.gallery');

const cardTemplate = document.querySelector('#new-card').content.querySelector('.gallery__item');

const handleLikeCard = (event) => {
  event.target.closest('.gallery__button-like').classList.toggle('gallery__button-like_active');
}

const handleDeleteCard = (event) => {
  event.target.closest('.gallery__item').remove();
}

const fillPopupImagData = (dataCard) => {
  popupImagePicture.src = dataCard.link;
  popupImageTitle.textContent = dataCard.name;
  popupImagePicture.alt = dataCard.name;
}

const generateCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true);

  const nameImageTitle = newCard.querySelector('.gallery__item-title');
  nameImageTitle.textContent = dataCard.name;

  const cardDeleteButton = newCard.querySelector('.gallery__button-delete');
  cardDeleteButton.addEventListener('click', handleDeleteCard);

  const cardLikeButton = newCard.querySelector('.gallery__button-like');
  cardLikeButton.addEventListener('click', handleLikeCard);

  const cardImage = newCard.querySelector('.gallery__image');
  cardImage.src = dataCard.link;
  cardImage.alt = dataCard.name;

  cardImage.addEventListener('click', () => {
    openPopup(popupImage);
    fillPopupImagData(dataCard);
  });

  return newCard;
}

const handleSubmitAddCardForm = (event) => {
  event.preventDefault();
  renderCard({ name: placeInput.value, link: imageInput.value });
  formCard.reset();
  closePopup(popupCard);
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
const popupImagePicture = popupImage.querySelector('.popup__open-image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');
const popupImageCloseButton = popupImage.querySelector('.popup__close-btn');

popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));
