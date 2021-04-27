let icon = document.querySelector('.scrolldown');

window.addEventListener('scroll', function() {
let value = window.scrollY;

icon.style.opacity -= value * 0.5;

});