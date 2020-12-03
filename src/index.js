//define variable
import "../style.scss";
// import "core-js/stable";
// import "regenerator-runtime/runtime";
const imgList = document.getElementById("slider");
const childrenImg = [].slice.call(imgList.children);
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const thumbnails = document.getElementById("thumbnails");
const sliderContainer = document.getElementById("slider-container");
const timeContainer = document.getElementById("time");
let counter = 1;
let time = 0;
let setPause = false;

//copy image to display thumbnails
for (let i = 0; i < imgList.children.length; i++) {
  const itm = imgList.children[i];
  const cln = itm.cloneNode(true);
  cln.classList.remove("first-element");
  cln.classList.remove("second-element");
  cln.classList.remove("slider-element");
  thumbnails.appendChild(cln);
}

const childrenThumbnails = [].slice.call(thumbnails.children);
thumbnails.children[0].classList.add("frame");

thumbnails.onclick = function (e) {
  imgList.classList.remove("next");
  imgList.classList.remove("prev");
  imgList.classList.remove("default");
  imgList.classList.add("default");
  let tgt = e.target,
    i = 0,
    items;
  if (tgt === this) return;
  items = childrenFunc(this);
  while (tgt.parentNode !== this) tgt = tgt.parentNode;
  while (items[i] !== tgt) i++;
  if (i < imgList.children.length - 1) {
    changeSlide(i, i + 1);
    counter = i + 1;
  } else {
    changeSlide(i, 0);
    counter = 0;
  }
  addFrame(i);
};
function childrenFunc(el) {
  let i = 0,
    children = [],
    child;
  while ((child = el.childNodes[i++])) {
    if (child.nodeType === 1) children.push(child);
  }
  return children;
}

btnNext.onclick = function () {
  nextElement();
};

btnPrev.onclick = function () {
  prevElement();
};

const nextElement = () => {
  imgList.classList.remove("next");
  imgList.classList.remove("prev");
  imgList.classList.remove("default");
  imgList.classList.add("next");

  let nextSlide1 = null;
  const nextSlide = document.getElementsByClassName("first-default-element");
  if (nextSlide.length !== 2) {
    nextSlide1 = document.getElementsByClassName("first-element");
  } else {
    nextSlide1 = nextSlide;
  }
  nextSlide1[0].classList.add("next-slide");
  setTimeout(function () {
    const nextSlide2 = document.getElementsByClassName("next-slide");
    nextSlide2[0].classList.remove("next-slide");
  }, 500);

  if (counter < imgList.children.length - 1) {
    changeSlide(counter, counter + 1);
    counter = counter + 1;
  } else {
    changeSlide(counter, 0);
    counter = 0;
  }
};

const prevElement = () => {
  imgList.classList.remove("next");
  imgList.classList.remove("prev");
  imgList.classList.remove("default");
  imgList.classList.add("prev");

  let prevSlide1 = null;
  const prevSlide = document.getElementsByClassName("second-default-element");
  if (prevSlide.length !== 2) {
    prevSlide1 = document.getElementsByClassName("second-element");
  } else {
    prevSlide1 = prevSlide;
  }
  prevSlide1[0].classList.add("prev-slide");
  setTimeout(function () {
    const prevSlide2 = document.getElementsByClassName("prev-slide");
    prevSlide2[0].classList.remove("prev-slide");
  }, 500);

  let lastIndex = imgList.children.length - 1;
  if (counter > 1) {
    changeSlide(counter - 2, counter - 1);
    counter = counter - 1;
  } else if (counter === 1) {
    changeSlide(lastIndex, counter - 1);
    counter = 0;
  } else {
    changeSlide(lastIndex - 1, lastIndex);
    counter = imgList.children.length - 1;
  }
};

const changeSlide = (index1, index2) => {
  time = 0;
  childrenImg.forEach((slide) => {
    slide.classList.remove("first-element");
    slide.classList.remove("second-element");
    slide.classList.remove("first-default-element");
    slide.classList.remove("second-default-element");
  });
  addFrame(index1);
  imgList.children[index1].classList.add("first-element");
  imgList.children[index2].classList.add("second-element");
};

//add border to clicked thumbnails
const addFrame = (index) => {
  childrenThumbnails.forEach((slide) => {
    slide.classList.remove("frame");
  });
  thumbnails.children[index].classList.add("frame");
};

//interval function
window.setInterval(function () {
  if (!setPause) {
    time++;
    timeContainer.innerHTML = 5 - time;
    if (time === 5) {
      nextElement();
      time = 0;
    }
  }
}, 1000);

if (screen && screen.width > 768) {
  //stop timer when mouse is hover on element
  sliderContainer.addEventListener(
    "mouseover",
    () => {
      setPause = true;
      // time = 0;
    },
    false
  );

  sliderContainer.addEventListener(
    "mouseleave",
    () => {
      setPause = false;
    },
    false
  );
}
sliderContainer.addEventListener("touchstart", handleTouchStart, false);
sliderContainer.addEventListener("touchmove", handleTouchMove, false);
sliderContainer.addEventListener("mousedown", handleTouchStart, false);
sliderContainer.addEventListener("mousemove", handleTouchMove, false);
let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
  if (evt.type === "touchstart") {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  } else {
    xDown = evt.clientX;
    yDown = evt.clientY;
  }
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }
  let xUp = null;
  let yUp = null;
  if (evt.type === "touchstart") {
    xUp = evt.touches[0].clientX;
    yUp = evt.touches[0].clientY;
  } else {
    xUp = evt.clientX;
    yUp = evt.clientY;
  }

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;
  let value1 = 0;
  let value2 = 0;

  if (screen && screen.width > 768) {
    value1 = 1;
    value2 = -3;
  } else {
    value1 = 0;
    value2 = 0;
  }

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > value1) {
      nextElement();
    } else if (xDiff < value2) {
      prevElement();
    }
  }
  xDown = null;
  yDown = null;
}
