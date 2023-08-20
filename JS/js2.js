const showImageElem = document.getElementById("showimage");
const hideImageElem = document.getElementById("hideimage");
const listImages = document.querySelectorAll('.image-flower-item');
const listButton = document.querySelectorAll('.color-box')
const circleElem = document.querySelector(".cirle");

showImageElem.onfocus = () => {
  const imageActive = document.querySelector(".image-flower-item.active");
  circleElem.style.backgroundImage = `url("${imageActive.src}")`;
}

hideImageElem.onfocus = () => {
  circleElem.style.backgroundImage = `none`;
  const colorActive = document.querySelector(".color-box.active");
  circleElem.style.backgroundColor = colorActive.value;
}

listImages.forEach(item => {
  let timeoutId;
  item.onmouseover = (e) => {
    timeoutId = setTimeout(() => {
      item.classList.add("active");
      if(showImageElem.checked) circleElem.style.backgroundImage = `url("${e.target.src}")`;
    }, 1000);
    listImages.forEach(elem => {
      if(elem !== item && item.classList.value.indexOf('active') !== -1) {
        elem.classList.remove('active');
      }
    });
  }
  item.onmouseleave = (e) => {
    clearTimeout(timeoutId);
  }
});

listButton.forEach(item => {
  item.onclick = (e) => {
    item.classList.add('active');
    if(hideImageElem.checked) circleElem.style.backgroundColor = item.value;
    listButton.forEach(elem => {
      if(elem !== item && item.classList.value.indexOf('active') !== -1) {
        elem.classList.remove('active');
      }
    });
  }
});

const buttonStartElem = document.getElementById("start");
const buttonStopElem = document.getElementById("stop");
const boxCircle = document.querySelector(".motion-box");
let speedX = Math.random()*5 + 2;
let speedY = Math.random()*5 + 2;
let isPlay = false;
let myRe;



const updateCircle = () => {
  const x = Number(getComputedStyle(circleElem).left.replace('px', '')) - speedX;
  const y = Number(getComputedStyle(circleElem).top.replace('px', '')) - speedY;
  circleElem.style.top = `${y}px`;
  circleElem.style.left = `${x}px`;
}

const run = () => {
  if(circleElem.offsetLeft <= 0 || circleElem.offsetLeft + circleElem.clientWidth >= boxCircle.clientWidth) {
    speedX *= -1;
  }
  if(circleElem.offsetTop <= 0 ||  circleElem.offsetTop + circleElem.clientHeight >= boxCircle.clientHeight) {
    speedY *= -1;
  }
  updateCircle();
  myRe = requestAnimationFrame(run);
}

buttonStartElem.onclick = () => {
  !isPlay && run();
  isPlay = true;
};

buttonStopElem.onclick = () => {
  isPlay && cancelAnimationFrame(myRe);
  isPlay = false;
};