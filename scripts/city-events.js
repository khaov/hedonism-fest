const cardTemplate = document.querySelector('.card__template').content;


// Создание карточки мероприятия
function createCard(cityEventCards) {

  const cardElement = cardTemplate.querySelector('.events__list-item').cloneNode(true);

  const data = cityEventCards

  // const cardArticle = cardElement.querySelector('.event-card');
  // // cardArticle.aria-label = cityEventCards.link;
  // const cardName = cardElement.querySelector('.photo-grid__image-title');
  // cardName.textContent = сard.name;

  // // Вешаю слушателей
  // // Like card
  // const cardLikeBtn = cardElement.querySelector('.photo-grid__like-button');
  // cardLikeBtn.addEventListener('click', () => {
  //   cardLikeBtn.classList.toggle('photo-grid__like-button_active');
  // });
  // // Delete card
  // const cardDeleteBtn = cardElement.querySelector('.photo-grid__delete-button');
  // cardDeleteBtn.addEventListener('click', (evt) => {
  //   evt.target.closest('.photo-grid__item').remove();
  // });
  // // Open image
  // const OpenImage = cardElement.querySelector('.photo-grid__image');
  // OpenImage.addEventListener('click', (evt) => {
  //   openPopup({src: сard.link, name: сard.name}, '.popup_type_view');
  // });

  // Возвращаю элемент карточки
  return cardElement;

}
