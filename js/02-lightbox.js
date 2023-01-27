import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgContainer = document.querySelector(".gallery");
const imgMarkup = createGalleryImgMarkup(galleryItems);

imgContainer.insertAdjacentHTML("beforeend", imgMarkup);


function createGalleryImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}"
                alt="${description}" />
        </a>
    `;
    })
    .join("");
}

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    scrollZoom: false,
  });


  console.log(galleryItems);

