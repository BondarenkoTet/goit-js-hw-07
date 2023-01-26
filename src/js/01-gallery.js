import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgContainer = document.querySelector(".gallery");
const imgMarkup = createGalleryImgMarkup(galleryItems);
const refs = {
  currentImg: undefined,
};
imgContainer.insertAdjacentHTML("beforeend", imgMarkup);

imgContainer.addEventListener("click", onImgContainerClick);
document.addEventListener("keydown", closeImgOnEsc);

function createGalleryImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </div>
    `;
    })
    .join("");
}

function onImgContainerClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const bigGalleryEl = event.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${bigGalleryEl}" width="800" height="600">
`);

  refs.currentImg = instance;
  instance.show();

  console.log(bigGalleryEl);
}
function closeImgOnEsc(event) {
  if (event.key === "Escape") {
    console.log("1");
    refs.currentImg.close();
  }
}
console.log(galleryItems);
