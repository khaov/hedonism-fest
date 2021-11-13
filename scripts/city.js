const cardTemplate = document.querySelector('.card__template').content;


// Создание карточки мероприятия
function createCard(dataCity) {

  const cardElement = cardTemplate.querySelector('.events__list-item').cloneNode(true);

  const cardEvent = cardElement.querySelector('.event-card');
  cardEvent.setAttribute('aria-label', dataCity.link);

  const cardImage = cardElement.querySelector('.event-card__main-picture');
  cardImage.src = dataCity.image;
  cardImage.alt = dataCity.alt;

  const cardCategory = cardElement.querySelector('.category');
  cardCategory.textContent = dataCity.category;

  const cardDate = cardElement.querySelector('.date');
  cardDate.textContent = dataCity.date;

  const cardTitle = cardElement.querySelector('.event-card__title');
  cardTitle.textContent = dataCity.title;

  const cardSubtitle = cardElement.querySelector('.event-card__subtitle');
  cardSubtitle.textContent = dataCity.subtitle;

  const cardAdress = cardElement.querySelector('.adress');
  cardAdress.textContent = dataCity.adress;

  const cardCount = cardElement.querySelector('.count');
  cardCount.textContent = dataCity.count;

  const cardLike = cardElement.querySelector('.event-card__like');
  cardLike.addEventListener('click', (evt) => {
    cardLike.classList.toggle('event-card__like_active');
  });

  return cardElement;
}

// Вывод карточек при загрузке страницы
function loadCards(cityData) {

  const carsContainer = document.querySelector('.events__cards');

  const activeCityData = cityData.filter(item => {
    return item.active === 'true';
  });

  let resCards = [];
  activeCityData[0]['data'].forEach(item => {
    resCards.push(createCard(item));
  })

  resCards.forEach((item) => {
    carsContainer.append(item);
  })

}

loadCards(cityEventCards);
