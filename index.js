import galleryItems from './gallery-items.js';

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

let idxElement = 0;
const open = function (event) {
    if (event.target.nodeName === 'IMG') {
        refs.imgModal.src = event.target.dataset.source
        refs.imgModal.alt = event.target.alt
        refs.openModal.classList.add('is-open')
    }
    galleryItems.map((el, idx) => {
        if (el.original === event.target.dataset.source) {
            idxElement = idx 
         }
     })
    refs.openModal.addEventListener('click',close)
    window.addEventListener("keydown", hendlerKeyDown);
}

const render = function (idxElement) {
    refs.imgModal.src = galleryItems[idxElement].original
     refs.imgModal.alt = galleryItems[idxElement].description
}


const close = function (event) {
    if (event.target.nodeName !== 'IMG') {
        refs.imgModal.src = ''
        refs.imgModal.alt = ''
        refs.openModal.classList.replace('is-open', 'lightbox')
    } 
    
    refs.openModal.removeEventListener('click',close)
    window.removeEventListener("keydown", hendlerKeyDown);
}

const hendlerKeyDown = function (event) {
  const {key} = event
    switch (key) {
        case "Escape":
              refs.imgModal.src = ''
        refs.imgModal.alt = ''
        refs.openModal.classList.replace('is-open', 'lightbox')
            break
        case "ArrowRight":
            if (idxElement === galleryItems.length - 1 ) {
            idxElement = 0
        }
        else {
            idxElement += 1
        }
        render(idxElement)
            break
        case "ArrowLeft":
        if (idxElement === 0) {
          idxElement = galleryItems.length - 1 
        }
        else {
            idxElement -= 1
        }
        render(idxElement)
            break

    }
}

refs.list.addEventListener('click',open)





