import galleryItems from './gallery-items.js';

// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

const refs = {
    list: document.querySelector('.js-gallery'),
    imgModal: document.querySelector('.lightbox__image'),
    openModal: document.querySelector('.lightbox'),
    btnCloseModal: document.querySelector('.lightbox__button'),
    overlayModal: document.querySelector('.lightbox__overlay')
}

galleryItems.map(el => {
    refs.list.insertAdjacentHTML("beforeend",`<li class="gallery__item"><a class="gallery__link"><img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}"></a></li>`)
    document.querySelector('.gallery__image').append(el)
})

const open = function (event) {
    if (event.target.nodeName === 'IMG') {
        refs.imgModal.src = event.target.dataset.source
        refs.imgModal.alt = event.target.alt
        refs.openModal.classList.add('is-open')
    }
}

refs.list.addEventListener('click',open)

const close = function (event) {
    if (event.target.nodeName === 'BUTTON') {
        refs.imgModal.src = ''
        refs.imgModal.alt = ''
        refs.openModal.classList.replace('is-open', 'lightbox')
    } if (event.target.nodeName === 'DIV') {
        refs.imgModal.src = ''
        refs.imgModal.alt = ''
        refs.openModal.classList.replace('is-open', 'lightbox')
    }
    // if (event.kyeCode == 27) {
    //     refs.imgModal.src = ''
    //     refs.imgModal.alt = ''
    //     refs.openModal.classList.replace('is-open', 'lightbox')
    // }
    // console.dir(event.keyCode);
}



refs.openModal.addEventListener('click',close)
// refs.openModal.addEventListener("keydown", close);
// refs.openModal.addEventListener("keyup", close);


