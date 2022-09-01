// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Створення розмітки

const galleryEl = document.querySelector('.gallery');
const list = createImgList(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', list);

function createImgList(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
                <a class="gallery__link" href="large-image.jpg">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
    })
    .join('');
}

// Додання слухача подій на <div class="gallery">

galleryEl.addEventListener('click', onImgClick);

function onImgClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  // Підключення Лайтбокс
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  // Закриття по кліку на Escape

  window.addEventListener('keydown', onEscapeDown);
  function onEscapeDown(event) {
    if (event.code !== 'Escape') {
      return;
    }
    instance.close();
  }
}
