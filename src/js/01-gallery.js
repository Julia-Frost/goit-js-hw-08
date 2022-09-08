// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryAlbum = document.querySelector('.gallery');

galleryAlbum.addEventListener('click', openGalleryItem);

function addItemToGallery({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}" />
        </a>`;
}

// Створює розмітку

const addNewImage = galleryItems.map(addItemToGallery).join('');

galleryAlbum.insertAdjacentHTML('afterbegin', addNewImage);

// Відкриває зображення по кліку

function openGalleryItem(event) {
  event.preventDefault();
  const imageSrc = event.target.dataset.source;
}

const gallery = new SimpleLightbox('.gallery a');
const captionsData = (gallery.options.captionsData = 'alt');
const captionDelay = (gallery.options.captionDelay = 250);
