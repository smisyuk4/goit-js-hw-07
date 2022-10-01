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
Потім використовувати шаблонну розмітку зображень галереї:
<br>
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>

