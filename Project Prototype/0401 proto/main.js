const toggleBtn = document.querySelector('.tooggleBtn');
const menu = document.querySelector('.menu');
// const icons = document.querySelector('.icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    // icons.classList.toggle('active');
});



const userMenu = document.querySelector('.user_menu');
const action = document.querySelector('.action');

action.addEventListener('click', () => {
    userMenu.classList.toggle('active');
});



window.addEventListener("scroll", function (){
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0 );
})
