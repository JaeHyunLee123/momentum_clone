const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const setBackgroundImageSize = () => {
  const backgroundImageWidth = window.innerHeight * 1.6;

  if (window.innerHeight * 1.6 > window.innerWidth) {
    document.body.style.backgroundSize = `${backgroundImageWidth}px`;
  } else {
    document.body.style.backgroundSize = `100%`;
  }
};

document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url("img/${choosenImage}")`;

setBackgroundImageSize();
window.addEventListener("resize", setBackgroundImageSize);
