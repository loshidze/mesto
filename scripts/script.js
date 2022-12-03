//попап редактирования профиля

const profileEditButton = document.querySelector('.profile__button-info');
const popupProfile = document.querySelector('.popup_type_profile');

const formProfile = document.forms.editprofile;
const nameInput = editprofile.elements.contentname;
const jobInput = editprofile.elements.occupation;

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function handleSubmitEditProfileForm (evt) {
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


const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

formProfile.addEventListener('submit', handleSubmitEditProfileForm);


//попап добавления карточки


const addCardButton = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('.popup_type_card');

const formCard = document.forms.editcard;
const placeInput = editcard.elements.cardname;
const imageInput = editcard.elements.link;

const popupImage = document.querySelector('.popup_type_image');
const popupImagePicture = popupImage.querySelector('.popup__open-image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');

const cardContainer = document.querySelector('.gallery');
const cardTemplate = document.querySelector('#new-card').content.querySelector('.gallery__item');

addCardButton.addEventListener('click', () => {openPopup(popupCard)});


const handleLikeCard = (event) => {
  event.target.closest('.gallery__button-like').classList.toggle('gallery__button-like_active');
}

const handleDeleteCard = (event) => {
  event.target.closest('.gallery__item').remove();
}

const fillPopupImageData = (dataCard) => {
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
    fillPopupImageData(dataCard);
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
