
    var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 2,
    slideShadows: true,
},
    pagination: {
    el: '.swiper-pagination',
},
    loop : true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
});

// ------------------------------------------------------- //
    const bigImg = document.querySelector('.big-container img');
    const slides = document.querySelectorAll('.itemBox');
    const slideUrl = document.querySelectorAll('.itemBox img');
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
        bigImg.src = slideUrl[activeSlide].src;
    }

    function setActiveSlide() {
        slides.forEach((slide) => slide.classList.remove('active'));

        slides[activeSlide].classList.add('active');
    }
