import galleryItems from './gallery-items.js';

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

// В файле gallery-items.js есть массив объектов содержащих информацию о изображениях: маленькое изображение, оригинальное и описание.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки (это необходимо для доступности).

// <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li>
// Дополнительно
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".


// console.log(galleryItems);

const refs = {
    list: document.querySelector('.js-gallery'),
    imgModal: document.querySelector('.lightbox__image'),
    openModal: document.querySelector('.lightbox')
}



// console.log(refs.list);
galleryItems.map(el => {
    refs.list.insertAdjacentHTML("beforeend",`<li class="gallery__item"><a class="gallery__link"><img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}"></a></li>`)
    document.querySelector('.gallery__image').append(el)
    // console.log(document.querySelector('.gallery__image'));
})

const open = function (event) {
    if (event.target.nodeName === 'IMG') {
        refs.imgModal.src = event.target.dataset.source
        refs.imgModal.alt = event.target.alt
        refs.openModal.classList.add('is-open')

        // console.log(event.target.dataset.source);console.dir(event.target);
    }
}

//создать функцию на клик которая будет регировать на клик будет искать таргет (кнопка или бекдроп) снимать слушатель. затирать срц на кортинке на модалке.


refs.list.addEventListener('click',open)
