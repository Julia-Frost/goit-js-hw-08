// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
const galleryAlbum = document.querySelector('.gallery');
galleryAlbum.addEventListener('click', openGalleryItem);
// Добавляет картинки из объекта в разметку
function addItemToGallery({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}" />
        </a>`;
}
// Делаем один бойльшой файл разметки
let addNewImage = galleryItems.map(addItemToGallery).join('');
// Вставляет в разметку разметку картинки
galleryAlbum.insertAdjacentHTML('afterbegin', addNewImage);
// Открывает модальное окно с картинкой по клику (большой, оригинальной)
function openGalleryItem(event) {
  event.preventDefault();
  // Достукиваемся до дата-атрибута по клику
  const imageSrc = event.target.dataset.source;
}
let gallery = new SimpleLightbox('.gallery a');
let captionsData = (gallery.options.captionsData = 'alt');
let captionDelay = (gallery.options.captionDelay = 250);
