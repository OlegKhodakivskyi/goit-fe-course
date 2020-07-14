import { default as galleryItems } from "./gallery-items.js";

// console.table(galleryItems);

const gallery = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");
const modalOverlay = document.querySelector(".lightbox__overlay");
const modalImage = document.querySelector(".lightbox__image");
let modalImageActive;
let markup = "";

galleryItems.forEach(
  (item) =>
    (markup += `
  <li class="gallery__item">
  <a class="gallery__link"
  href="${item.original}"
  >
  <img
  class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
      />
      </a>
      </li>
      `)
);
gallery.insertAdjacentHTML("afterbegin", markup);

function modalOpen(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  modal.classList.add("is-open");
  modalImage.src = event.target.dataset.source;
  modalImage.alt = event.target.alt;

  modal.addEventListener("click", modalClose);
  document.addEventListener("keydown", modalClose);
  document.addEventListener("keydown", slideImages);
}

function slideImages(event) {
  modalImageActive = modalImage.getAttribute("src");
  let modalImageActiveIndex = galleryItems.findIndex(
    (element) => element.original === modalImageActive
  );

  // ====================== arrow slide right =======

  if (event.key === "ArrowRight") {
    let newImageCurrentIndex = modalImageActiveIndex + 1;

    if (newImageCurrentIndex >= galleryItems.length) {
      newImageCurrentIndex = 0;
    }

    let newModalImage = modalImage.setAttribute(
      "src",
      galleryItems[newImageCurrentIndex].original
    );
  }

  // ====================== arrow slide left=======

  if (event.key === "ArrowLeft") {
    let newImageCurrentIndex = modalImageActiveIndex - 1;
    if (newImageCurrentIndex < 0) {
      newImageCurrentIndex = galleryItems.length - 1;
    }

    let newModalImage = modalImage.setAttribute(
      "src",
      galleryItems[newImageCurrentIndex].original
    );
  }
}

// ===================== modal close =======

function modalClose(event) {
  if (
    event.target.nodeName === "IMG" ||
    event.target === modalOverlay ||
    event.target.dataset.action === "close-lightbox" ||
    event.key === "Escape"
  ) {
    modalImage.src = "";
    modal.classList.remove("is-open");
    modal.removeEventListener("click", modalClose);
    document.removeEventListener("keydown", modalClose);
  }
}

gallery.addEventListener("click", modalOpen);
