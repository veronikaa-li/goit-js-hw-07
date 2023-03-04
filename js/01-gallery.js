import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// створення і рендер розмітки //

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onPictureClick);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({preview, original, description}) => {
      return `

        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `;
    })
    .join(' ');
}

function onPictureClick(evt) {
  evt.preventDefault();
  const galleryImage = evt.target.classList.contains('gallery__image');
  if (!galleryImage) {
    return;
  }
  console.log(evt.target);
  onModal(evt.target);
}

function onModal(evt) {
  const instance = basicLightbox.create(
    `<img src="${evt.dataset.source}" width="800" height="600"/>`,
    {
      onShow: (_instance) => {
        galleryContainer.addEventListener('keydown', onEscBtn);        
      },
      onClose: (_instance) => {
        galleryContainer.removeEventListener('keydown', onEscBtn);
      },
    }
  );
  instance.show();

  function onEscBtn(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}














