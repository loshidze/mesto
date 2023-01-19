import "./index.css"

import Card from "../components/Card.js"
import initialCards from "../utils/cards.js"
import FormValidator from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import UserInfo from "../components/UserInfo.js"
import {
  profileEditButton,
  popupProfile,
  formProfile,
  nameInput,
  jobInput,
  profileTitle,
  profileSubtitle,
  addCardButton,
  popupCard,
  formCard,
  placeInput,
  imageInput,
  popupImage,
  cardContainer,
  optionsForValidation
} from "../utils/constants.js"

// редактированите профиля

profileEditButton.addEventListener('click', () => {
  const dataProfile = profileInfo.getUserInfo();
  nameInput.value = dataProfile.name;
  jobInput.value = dataProfile.job;
  profilePopup.open()
});

const profilePopup = new PopupWithForm({
  selector: popupProfile,
  handleSubmit: () => {
    profileInfo.setUserInfo({name: nameInput.value, job: jobInput.value});
    profilePopup.close();
  }
})

profilePopup.setEventListeners()

const profileInfo = new UserInfo(profileTitle, profileSubtitle)

// добавление карточки

addCardButton.addEventListener('click', () => {
  addCardPopup.open();
});

function createCard(item) {
  const cardElement = new Card(item, "#new-card", handleCardClick).getView();
  return cardElement;
}

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item))
  },
},
cardContainer
);

cardsList.renderItems();

const addCardPopup = new PopupWithForm({
  selector: popupCard,
  handleSubmit: () => {
    cardsList.addItem(createCard({ name: placeInput.value, link: imageInput.value }));
    addCardPopup.close();
  }
})

addCardPopup.setEventListeners();

// попап открытия картинки

const popupImageOpen = new PopupWithImage({selector: popupImage});

function handleCardClick(name, link) {
  popupImageOpen.open(name, link);
}

popupImageOpen.setEventListeners();

// валидация форм

const profileValidation = new FormValidator(optionsForValidation, formProfile);
const cardValidation = new FormValidator(optionsForValidation, formCard);

profileValidation.enableValidation();
cardValidation.enableValidation();
