// 1+. Створення і рендер розмітки на підставі масиву даних 
// galleryItems і наданого шаблону елемента галереї.
// Використовуй готовий код з першого завдання.

// 2+. Підключення скрипту і стилів бібліотеки, 
// використовуючи CDN сервіс cdnjs.
//          https://cdnjs.com/libraries/simplelightbox
// Необхідно додати посилання на два файли: 
// simple - lightbox.min.js і simple - lightbox.min.css.

// 3. Ініціалізація бібліотеки після створення і додання елементів 
// галереї у div.gallery.
// Для цього ознайомся з документацією SimpleLightbox - 
//          https://simplelightbox.com/
// насамперед секції «Usage» і «Markup».

// 4. Подивися в документації секцію «Options» 
// і додай відображення підписів до зображень з атрибута alt.
// Нехай підпис буде знизу і з'являється через 250 мілісекунд 
// після відкриття зображення.

import { galleryItems } from './gallery-items.js';

const refs = {
    gallery: document.querySelector('.gallery'),
}

const markupArr = galleryItems.map((item) => {
    return `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" 
                        alt="${item.description}"
                        title="${item.description}"/>
            </a>`;
})

refs.gallery.insertAdjacentHTML('afterbegin', markupArr.join(''))

refs.gallery.addEventListener('click', zoomImage)

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250});

function zoomImage(event) {
    event.preventDefault();  
}