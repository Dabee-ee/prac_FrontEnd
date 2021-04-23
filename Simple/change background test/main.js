const bigImg = document.querySelector('.big-container');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

// right action
rightBtn.addEventListener('click', () => {
    activeSlide++;

    if(activeSlide > slides.length -1) {
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
});

// left action
leftBtn.addEventListener('click', () => {
    activeSlide--;

    if(activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
});

//
setBgToBody()

function setBgToBody() {
    bigImg.style.backgroundImage = slides[activeSlide].
        style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active');
    }
