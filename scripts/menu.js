const menuPopup = document.querySelector('.menu_primary')
const openMenuButton = document.querySelector('.button_type_header_menu')
const menuCityPopup = document.querySelector('.menu_city')
const openMenuCityButton = document.querySelector('.menu__arrow-button_right')
const closeMenuCityButton = document.querySelector('.menu__arrow-button_left')

function openMenu() {
  menuPopup.classList.toggle('menu__opened')
}

function openCityMenu() {
  menuCityPopup.classList.add('menu__opened')
}

function closeCityMenu() {
  menuCityPopup.classList.remove('menu__opened')
}

openMenuButton.addEventListener('click', openMenu)

openMenuCityButton.addEventListener('click', openCityMenu)

closeMenuCityButton.addEventListener('click', closeCityMenu)
