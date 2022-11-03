let profileElement = document.querySelector('.profile__button-info');
let popupElement = document.querySelector('.popup');
let popupCloseElement = popupElement.querySelector('.popup__close-btn');

let formElement = popupElement.querySelector('.popup__form');
let nameInput = formElement.querySelector('#contentname');
let jobInput = formElement.querySelector('#occupation');

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

profileElement.addEventListener('click', function() {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

popupCloseElement.addEventListener('click', function () {
  popupElement.classList.remove('popup_opened');
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popupElement.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

