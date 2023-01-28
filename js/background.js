const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

const setBackgroundImageSize = () => {
  if (window.innerHeight * 1.6 > window.innerWidth) {
    bgImage.classList.remove("set-size-by-width");
    bgImage.classList.add("set-size-by-height");
  } else {
    bgImage.classList.remove("set-size-by-height");
    bgImage.classList.add("set-size-by-width");
  }
};

bgImage.src = `img/${choosenImage}`;

document.body.appendChild(bgImage);

bgImage.classList.add("background-image");

window.addEventListener("resize", setBackgroundImageSize);
