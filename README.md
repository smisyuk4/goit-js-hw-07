# goit-js-hw-07

Домашні завдання в цьому модулі спрямовані на роботу з сторонніми ресурсами які оформлюють галереї

<h1>1: <a href="https://basiclightbox.electerious.com/" target="_blank">basiclightbox</a></h1>
<a href="https://github.com/electerious/basicLightbox">github.com/basiclightbox</a>`
<br>
Для початку потрібно у html файл додати посилання на бібліотеки:
<br>
https://www.jsdelivr.com/package/npm/basiclightbox?path=dist
<br>
https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css
https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js
<br>
Потім використовувати шаблонну розмітку зображень галереї і використовувати обробник події(клік) по зображенню.

в обробнику потрібно створити новий екземпляр

function zoomImage(event) {
    event.preventDefault();

    const instance = basicLightbox.create(`      
            <img src="${event.target.getAttribute('data-source')}"
                alt="${event.target.getAttribute('alt')}"
            />`
        , {
        onClose: (instance) => {
            console.log('like it')
            window.removeEventListener('keydown', onPressEscBtn)
            refs.body.style.overflow = '';
        }}        
    )
