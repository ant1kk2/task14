const imagesLinks = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
];

let currentImg = 0;

const wrapper = document.createElement("div");
wrapper.className = "wrapper";
document.body.prepend(wrapper);

const prevBtn = document.createElement("button");
prevBtn.className = "prevBtn hidden";
prevBtn.textContent = "Prev";
wrapper.append(prevBtn);

const imgContainer = document.createElement("div");
imgContainer.className = "image-container";
wrapper.append(imgContainer);

const nextBtn = document.createElement("button");
nextBtn.className = "nextBtn";
nextBtn.textContent = "Next";
if (imagesLinks.length > 1) {
  wrapper.append(nextBtn);
}

const img = document.createElement("img");
img.className = "image";
if (imagesLinks.length) {
  img.src = imagesLinks[currentImg];
  img.alt = "Слайд з картинкою";
  img.onerror = () => {
    console.log("Перевірити шлях до картинки")
  }
  imgContainer.prepend(img);
} else {
  imgContainer.textContent = "Ми не маємо картинок";
}

function showNextSlide() {
  if (prevBtn.classList.contains("hidden")) {
    prevBtn.classList.remove("hidden");
    prevBtn.addEventListener("click", showPrevSlide);
  }
  img.src = imagesLinks[++currentImg];
  if (currentImg === imagesLinks.length - 1) {
    nextBtn.classList.add("hidden");
    nextBtn.removeEventListener("click", showNextSlide);
  }
}

function showPrevSlide() {
  if (nextBtn.classList.contains("hidden")) {
    nextBtn.addEventListener("click", showNextSlide);
    nextBtn.classList.remove("hidden");
  }
  img.src = imagesLinks[--currentImg];
  if (currentImg === 0) {
    prevBtn.classList.add("hidden");
    prevBtn.removeEventListener("click", showPrevSlide);
  }
}

nextBtn.addEventListener("click", showNextSlide);
