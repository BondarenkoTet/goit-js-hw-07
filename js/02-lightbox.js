import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgContainer = document.querySelector(".gallery");
const imgMarkup = createGalleryImgMarkup(galleryItems);

imgContainer.insertAdjacentHTML("beforeend", imgMarkup);

imgContainer.addEventListener("click", onImgContainerClick);

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

function onImgContainerClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const bigGalleryEl = event.target;

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    scrollZoom: false,
  });

  console.log(bigGalleryEl);

  console.log(galleryItems);
}
