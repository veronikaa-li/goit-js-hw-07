import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({preview, original, description}) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      `;
    })
    .join(' ');
}

function onClickSimpleLightBox(e) {
  e.preventDefault();
  
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  
  const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt', 
    captionDelay: 250, 
  });
  
  lightbox.open();
}

galleryContainer.addEventListener('click', onClickSimpleLightBox);







