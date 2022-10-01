// Створи галерею з можливістю кліку по її елементах 
// і перегляду повнорозмірного зображення у модальному вікні.


// Розбий його на декілька підзавдань:
// 1+. Створення і рендер розмітки на підставі масиву даних galleryItems 
// і наданого шаблону елемента галереї.

// 2+. Реалізація делегування на div.gallery і отримання url великого зображення.

// 3+. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
//        https://basiclightbox.electerious.com/
// Використовуй CDN сервіс jsdelivr і додай у проект посилання 
// на мініфіковані(.min) файли бібліотеки.
//        https://www.jsdelivr.com/package/npm/basiclightbox?path=dist

// 4+. Відкриття модального вікна по кліку на елементі галереї. 
// Для цього ознайомся з документацією і прикладами.
//        https://github.com/electerious/basicLightbox#readme
//        https://basiclightbox.electerious.com/

// 5+. Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// 6. Закриття з клавіатури
// Додай закриття модального вікна після натискання клавіші Escape. 
// Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.
// Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.

// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >,
// і вказуватися в href посилання.
// Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

import { galleryItems } from './gallery-items.js';

const refs = {
    gallery: document.querySelector('.gallery'),
    body: document.querySelector('body'),
}

const markupArr = galleryItems.map((item) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"            
            alt="${item.description}"
            />
        </a>
    </div>`;
})

refs.gallery.insertAdjacentHTML('afterbegin', markupArr.join(''))

refs.gallery.addEventListener('click', zoomImage)

let instance = {}

function zoomImage(event) {
    event.preventDefault();

    instance = basicLightbox.create(`
        <div class="modal">
            <img src="${event.target.getAttribute('data-source')}"                       
                alt="${event.target.getAttribute('alt')}"
            />
        </div>`,{
        onClose: (instance) => {
            console.log('like it')
            window.removeEventListener('keydown', onPressEscBtn)
            refs.body.style.overflow = '';
        }}
    )

    instance.show();

    refs.body.style.overflow = 'hidden';

    window.addEventListener('keydown', onPressEscBtn)
}


function onPressEscBtn(event) {
    if (event.code === 'Escape') {
        instance.close()
    }
    console.log(event.code)
}
