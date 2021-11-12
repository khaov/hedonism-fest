// Open/Close popup
const openPopupHeaderButton = document.querySelector('.header__button-help');
const openPopupMenuButton = document.querySelector('.menu__donate');
const closePopupButton = document.querySelector('.popup__button-close');
const closePopupSubmitButton = document.querySelector('.button_type_payment');
const popup = document.querySelector('.popup');
const menu = document.querySelector('.menu_primary');

// Buttuns amount
const buttonsAmountElement = document.querySelector('.popup__buttons-amount');
const buttonsAmount_100 = buttonsAmountElement.querySelector('.amount_100');
const buttonsAmount_300 = buttonsAmountElement.querySelector('.amount_300');
const buttonsAmount_500 = buttonsAmountElement.querySelector('.amount_500');
const buttonsAmount_1000 = buttonsAmountElement.querySelector('.amount_1000');
const buttonsAmount_3000 = buttonsAmountElement.querySelector('.amount_3000');
const buttonsAmountHead = buttonsAmountElement.querySelector('.popup__input_hend_amount');

// Input form
const inputEmailElement = document.querySelector('.popup__input_email');
const radioButtonBankCard = document.querySelector('.bank-card');

function openPopup() {
  activeButtonsAmount_100();
  inputEmailElement.value = '';
  radioButtonBankCard.checked = true;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function closeMenuOpenPopup() {
  menu.classList.remove('menu__opened');
  activeButtonsAmount_100();
  inputEmailElement.value = '';
  radioButtonBankCard.checked = true;
  popup.classList.add('popup_opened');
}

function activeButtonsAmount_100() {
  buttonsAmount_300.classList.remove('button_color_primary');
  buttonsAmount_500.classList.remove('button_color_primary');
  buttonsAmount_1000.classList.remove('button_color_primary');
  buttonsAmount_3000.classList.remove('button_color_primary');
  buttonsAmountHead.value = '';
  buttonsAmount_100.classList.add('button_color_primary');
}

function activeButtonsAmount_300() {
  buttonsAmount_100.classList.remove('button_color_primary');
  buttonsAmount_500.classList.remove('button_color_primary');
  buttonsAmount_1000.classList.remove('button_color_primary');
  buttonsAmount_3000.classList.remove('button_color_primary');
  buttonsAmountHead.value = '';
  buttonsAmount_300.classList.add('button_color_primary');
}

function activeButtonsAmount_500() {
  buttonsAmount_100.classList.remove('button_color_primary');
  buttonsAmount_300.classList.remove('button_color_primary');
  buttonsAmount_1000.classList.remove('button_color_primary');
  buttonsAmount_3000.classList.remove('button_color_primary');
  buttonsAmountHead.value = '';
  buttonsAmount_500.classList.add('button_color_primary');
}

function activeButtonsAmount_1000() {
  buttonsAmount_100.classList.remove('button_color_primary');
  buttonsAmount_300.classList.remove('button_color_primary');
  buttonsAmount_500.classList.remove('button_color_primary');
  buttonsAmount_3000.classList.remove('button_color_primary');
  buttonsAmountHead.value = '';
  buttonsAmount_1000.classList.add('button_color_primary');
}

function activeButtonsAmount_3000() {
  buttonsAmount_100.classList.remove('button_color_primary');
  buttonsAmount_300.classList.remove('button_color_primary');
  buttonsAmount_500.classList.remove('button_color_primary');
  buttonsAmount_1000.classList.remove('button_color_primary');
  buttonsAmountHead.value = '';
  buttonsAmount_3000.classList.add('button_color_primary');
}

function activeButtonsAmountHend() {
  buttonsAmount_100.classList.remove('button_color_primary');
  buttonsAmount_300.classList.remove('button_color_primary');
  buttonsAmount_500.classList.remove('button_color_primary');
  buttonsAmount_1000.classList.remove('button_color_primary');
  buttonsAmount_3000.classList.remove('button_color_primary');
}

function buttonsAmountHeadIsNumber() {
  buttonsAmountHead.value = buttonsAmountHead.value.replace(/\D/, '');
}

// Open popup
openPopupHeaderButton.addEventListener('click', openPopup);
openPopupMenuButton.addEventListener('click', closeMenuOpenPopup);

// Close popup
closePopupButton.addEventListener('click', closePopup);
closePopupSubmitButton.addEventListener('click', closePopup);

// Buttuns amount
buttonsAmount_100.addEventListener('click', activeButtonsAmount_100);
buttonsAmount_300.addEventListener('click', activeButtonsAmount_300);
buttonsAmount_500.addEventListener('click', activeButtonsAmount_500);
buttonsAmount_1000.addEventListener('click', activeButtonsAmount_1000);
buttonsAmount_3000.addEventListener('click', activeButtonsAmount_3000);
buttonsAmountHead.addEventListener('focus', activeButtonsAmountHend);

buttonsAmountHead.addEventListener('keyup', buttonsAmountHeadIsNumber);
