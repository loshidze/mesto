const profileElement = document.querySelector('.profile__button-info');
const popupElement = document.querySelector('.popup');
const popupCloseElement = popupElement.querySelector('.popup__close-btn');

const formElement = popupElement.querySelector('.popup__form');
const nameInput = formElement.querySelector('#contentname');
const jobInput = formElement.querySelector('#occupation');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// profileElement.addEventListener('click', function() {
//   popupElement.classList.add('popup_opened');
//   nameInput.value = profileTitle.textContent;
//   jobInput.value = profileSubtitle.textContent;
// });

// popupCloseElement.addEventListener('click', function () {
//   popupElement.classList.remove('popup_opened');
// });

// function formSubmitHandler (evt) {
//   evt.preventDefault();
//   profileTitle.textContent = nameInput.value;
//   profileSubtitle.textContent = jobInput.value;
//   popupElement.classList.remove('popup_opened');
// }

// formElement.addEventListener('submit', formSubmitHandler);

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
  popupElement.classList.remove('popup_opened');
}

profileElement.addEventListener('click', openPopup);
popupCloseElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
