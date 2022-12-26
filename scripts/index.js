import Card from "./Card.js"
import initialCards from "./cards.js"
import FormValidator from "./FormValidator.js"

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

addCardButton.addEventListener('click', () => {openPopup(popupCard)});

const handleSubmitAddCardForm = (event) => {
  event.preventDefault();
  renderCard({ name: placeInput.value, link: imageInput.value });
  formCard.reset();
  closePopup(popupCard);
};

function handleCardClick(name, link) {
  popupImagePicture.src = link;
  popupImageTitle.textContent = name;
  popupImagePicture.alt = name;
  openPopup(popupImage);
}

function createCard(item) {
  const cardElement = new Card(item, "#new-card", handleCardClick).getView();
  return cardElement;
}

const renderCard = (dataCard) => {
  const card = createCard(dataCard)
  cardContainer.prepend(card);
};

formCard.addEventListener("submit", handleSubmitAddCardForm);

initialCards.forEach(renderCard);

// валидация

const optionsForValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: '.popup__input-text-error',
  errorClass: '.popup__input-error'
};

const profileValidation = new FormValidator(optionsForValidation, formProfile);
const cardValidation = new FormValidator(optionsForValidation, formCard);

profileValidation.enableValidation();
cardValidation.enableValidation();

