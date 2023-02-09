import "./index.css"

import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import UserInfo from "../components/UserInfo.js"
import {
  profileEditButton,
  popupProfile,
  formProfile,
  profileTitle,
  profileSubtitle,
  addCardButton,
  popupCard,
  formCard,
  popupImage,
  cardContainer,
  optionsForValidation,
  popupAvatar,
  profileAvatar,
  formAvatar,
  profileAvatarImage,
  popupDelete
} from "../utils/constants.js"
import Api from "../components/Api.js"
import PopupWithConfirmation from "../components/PopupWithConfirmation.js"

// редактированите профиля

profileEditButton.addEventListener('click', () => {
  profilePopup.setInputValues(profileInfo.getUserInfo());
  profilePopup.open()
});

const profilePopup = new PopupWithForm(
  popupProfile, {
  handleSubmit: (data) => {
    profilePopup.loading(true);
    api.setProfileInfo(data)
      .then((res) => {
        profileInfo.setUserInfo(res)
        profilePopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        profilePopup.loading(false);
      })
  }
})

profilePopup.setEventListeners()

const profileInfo = new UserInfo(profileTitle, profileSubtitle, profileAvatarImage)

const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    'Content-Type': 'application/json',
    authorization: '318c6aa2-d252-473c-b9e5-2476fdd291ae'
  },
};

const api = new Api(configApi);

api.getProfileInfo().then((data) => {
  profileInfo.setUserInfo(data);
})
  .catch((err) => {
    console.log(err);
  })

// редактирование аватара

profileAvatar.addEventListener('click', () => {
  changeAvatarPopup.open()
})

const changeAvatarPopup = new PopupWithForm(
  popupAvatar, {
  handleSubmit: (data) => {
    changeAvatarPopup.loading(true);
    api.changeAvatar(data)
      .then((res) => {
        profileInfo.setUserInfo(res);
        changeAvatarPopup.close()
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        changeAvatarPopup.loading(false);
      })
  }
})

changeAvatarPopup.setEventListeners()

// добавление карточки

addCardButton.addEventListener('click', () => {
  addCardPopup.open();
});


function createCard(item) {
    const cardElement = new Card(item, "#new-card", handleCardClick, "ff8bd3f85f099d1fdcf3aa2f", likeCard, dislikeCard,
    (data, deleteCard) => {
      popupWithConfirmation.open();
      popupWithConfirmation.setData(data, deleteCard);
    }
    ).getView();
    return cardElement;
}

function likeCard(item) {
  api.like(item.id)
    .then((res) => {
      item.handleLikeCard();
      item.counterLikes(res);
    })
    .catch((err) => console.log(err));
}

function dislikeCard(item) {
  api.dislike(item.id)
    .then((res) => {
      item.handleLikeCard();
      item.counterLikes(res);
    })
    .catch((err) => console.log(err));
}

const cardsList = new Section({
  renderer: (item) => {
    cardsList.addItem(createCard(item))
  },
},
cardContainer
);

const addCardPopup = new PopupWithForm(
  popupCard, {
  handleSubmit: (data) => {
    addCardPopup.loading(true);
    api.setCard(data)
      .then((res) => {
        cardsList.addItem(createCard(res));
        addCardPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        addCardPopup.loading(false);
      })
  }
})

addCardPopup.setEventListeners();

api.getCards().then((data) => {
  cardsList.renderItems(data);
})
  .catch((err) => {
    console.log(err);
  })

  const popupWithConfirmation = new PopupWithConfirmation(popupDelete,
    () => {
      const {data, deleteCard} = popupWithConfirmation.getData();
      api.deleteCard(data._id)
        .then(() => {
          deleteCard();
          popupWithConfirmation.close();
        })
        .catch((error) => {
          console.log(error);
        })
    });

  popupWithConfirmation.setEventListeners();

// попап открытия картинки

const popupImageOpen = new PopupWithImage(popupImage);

function handleCardClick(name, link) {
  popupImageOpen.open(name, link);
}

popupImageOpen.setEventListeners();

// валидация форм

const profileValidation = new FormValidator(optionsForValidation, formProfile);
const cardValidation = new FormValidator(optionsForValidation, formCard);
const avatarValidation = new FormValidator(optionsForValidation, formAvatar);

profileValidation.enableValidation();
cardValidation.enableValidation();
avatarValidation.enableValidation();
