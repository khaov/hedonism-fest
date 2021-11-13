const containerGallery = document.querySelector('.gallery__items');
const GALLERY_CONTAINER_WIDTH = containerGallery.offsetWidth;

const dots = document.querySelector('.gallery__slider');
const picturesGallery = document.querySelectorAll('.gallery__image');

containerGallery.addEventListener('scroll',(e)=>{

  clearTimeout(e.target.scrollTimeoutID);

  e.target.scrollTimeoutID = setTimeout(function() {

      const indexPicture = ~~(containerGallery.scrollLeft / GALLERY_CONTAINER_WIDTH);

      const radioInput = document.querySelector(`.gallery__input[value='${indexPicture}']`);
      if (radioInput) {
        radioInput.checked = true;
      }

  }, 180);
});

for (let indexPicture = 0; indexPicture < picturesGallery.length; indexPicture++) {

  const dotInput = document.createElement('input');
  dotInput.classList.add('gallery__input');
  dotInput.id = `radio${indexPicture}`;
  dotInput.type = 'radio';
  dotInput.name = 'radioPictureSlider';
  dotInput.value = indexPicture;

  dotInput.addEventListener('change', (e) => {
    containerGallery.scrollLeft = GALLERY_CONTAINER_WIDTH * e.currentTarget.value;
  });

  dots.append(dotInput);

  const labelRadio = document.createElement('label');
  labelRadio.classList.add('gallery__slide');
  labelRadio.htmlFor = dotInput.id;

  dots.append(labelRadio);
}


containerGallery.scrollLeft = 320;
