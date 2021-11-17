const menuPopup = document.querySelector('.menu_primary');
const openMenuButton = document.querySelector('.button_type_header-menu');
const openMenuCityButton = document.querySelector('.menu__active-city');
const closeMenuCityButton = document.querySelector('.menu__goback');
const menuCityPopup = document.querySelector('.menu_city');
const itemsMenuCity = menuCityPopup.querySelector('.menu__city-items');
const itemMenuCityTemplate = document.querySelector('.menu-city__template').content;
const activeCity = document.querySelector('.header__location');
const itemHeaderMenuCityTemplate = document.querySelector('.header-menu-city__template').content;
const itemsHeaderMenuCity = document.querySelector('.header__city-menu-items');
const headerMenuCity = document.querySelector('.header__city-menu-container');

function openMenu() {
  headerMenuCity.classList.remove('header__city-menu-container_opened');
  if(menuCityPopup.classList.contains('menu__opened')) {
    menuCityPopup.classList.remove('menu__opened');
    menuPopup.classList.remove('menu__opened');
    return;
  }
  if (menuPopup.classList.contains('menu__opened')) {
    menuPopup.classList.remove('menu__opened');
  } else {
    activeCityMenu();
    menuPopup.classList.add('menu__opened');
  }
}

function openCityMenu() {
  headerMenuCity.classList.remove('header__city-menu-container_opened');
  createMenuItems(cityEventCards);
  menuCityPopup.classList.add('menu__opened');
}

function closeCityMenu() {
  activeCityMenu();
  menuCityPopup.classList.remove('menu__opened');
}

function activeCityMenu() {
  openMenuCityButton.textContent = activeCity.textContent;
}

function createMenuItems(dataCity) {

  const resultItems = [];
  dataCity.forEach(item => {

    const itemElement = itemMenuCityTemplate.querySelector('.menu__item-container').cloneNode(true);
    const itemButton = itemElement.querySelector('.menu__item');

    if(activeCity.textContent === item.сity) {
      itemButton.classList.add('menu__item_type_active');
    } else {
      itemButton.classList.remove('menu__item_type_active');
    }
    itemButton.textContent = item.сity;

    itemButton.addEventListener('click', (evt) => {

      if (itemButton.classList.contains('menu__item_type_active')) return;

      // удаляю предыдущую активность
      document.querySelector('.menu__item_type_active').classList.remove('menu__item_type_active');

      // добавляю новую активности
      itemButton.classList.add('menu__item_type_active');

      // смена города в хедере
      activeCity.textContent = item.сity;

      // загрузка мероприятий
      loadCardsForChangeCity(dataCity);

    });

    resultItems.push(itemButton);

  });

  itemsMenuCity.innerHTML = '';
  resultItems.forEach((item) => {
    itemsMenuCity.append(item);
  })

}

function createHeaderMenuItems(dataCity) {

  const resultItems = [];
  dataCity.forEach(item => {

    const itemElement = itemHeaderMenuCityTemplate.querySelector('.header__city-menu-item-container').cloneNode(true);
    const itemButton = itemElement.querySelector('.header__city-menu-item');

    if(activeCity.textContent === item.сity) {
      itemButton.classList.add('header__city-menu-item_type_active');
    } else {
      itemButton.classList.remove('header__city-menu-item_type_active');
    }
    itemButton.textContent = item.сity;

    itemButton.addEventListener('click', (evt) => {

      if (itemButton.classList.contains('header__city-menu-item_type_active')) {
        headerMenuCity.classList.remove('header__city-menu-container_opened');
        return;
      }

      // смена активности кнопки
      itemButton.classList.add('header__city-menu-item_type_active');

      // смена города в хедере
      activeCity.textContent = item.сity;

      // загрузка мероприятий
      loadCardsForChangeCity(dataCity);

      // закрытие меню
      headerMenuCity.classList.remove('header__city-menu-container_opened');

    });

    resultItems.push(itemButton);

  });

  itemsHeaderMenuCity.innerHTML = '';
  resultItems.forEach((item) => {
    itemsHeaderMenuCity.append(item);
  })

}

function loadCardsForChangeCity(cityData) {

  const carsContainer = document.querySelector('.events__cards');

  const activeCityData = cityData.filter(item => {
    return item.сity === activeCity.textContent;
  });

  let resCards = [];
  activeCityData[0]['data'].forEach(item => {
    resCards.push(createCard(item));
  })

  carsContainer.innerHTML = '';
  resCards.forEach((item) => {
    carsContainer.append(item);
  })

}

function openAndCloseHeaderMenuCity() {

  menuCityPopup.classList.remove('menu__opened');
  menuPopup.classList.remove('menu__opened');

  if(headerMenuCity.classList.contains('header__city-menu-container_opened')) {
    headerMenuCity.classList.remove('header__city-menu-container_opened');
    return;
  }

  createHeaderMenuItems(cityEventCards);
  headerMenuCity.classList.add('header__city-menu-container_opened');
}

openMenuButton.addEventListener('click', openMenu);

openMenuCityButton.addEventListener('click', openCityMenu);

closeMenuCityButton.addEventListener('click', closeCityMenu);

activeCity.addEventListener('click', openAndCloseHeaderMenuCity);
