# goit-js-hw-07

Домашні завдання в цьому модулі спрямовані на роботу з сторонніми ресурсами які оформлюють галереї

<h1>1: <a href="https://basiclightbox.electerious.com/">basiclightbox</a></h1>
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
<br>
В обробнику потрібно створити новий екземпляр const instance = basicLightbox.create()
<br>
<br>
<br>
<br>
<h1>2: <a href="https://simplelightbox.com/">simplelightbox</a></h1>
Для початку потрібно у html файл додати посилання на бібліотеки:
<br>
https://cdnjs.com/libraries/simplelightbox
<br>
https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.3/simple-lightbox.min.js
https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.3/simple-lightbox.esm.js
<br>
Потім використовувати шаблонну розмітку зображень галереї і використовувати обробник події(клік) по зображенню.
<br>
В обробнику потрібно створити новий екземпляр const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250});

