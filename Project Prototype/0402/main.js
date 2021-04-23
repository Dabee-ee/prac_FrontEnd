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


/* ----------------------- FAQ Accordion ------------------------ */

const accordion = document.getElementsByClassName('contentBox');

for(let i = 0 ; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

/* -------------------------------------------------- */
// const currentLocation = location.href;
// const menuItem = document.querySelectorAll('a');
// const menuLength = menuItem.length
// for (let i = 0; i < menuLength; i++ ) {
//     if (menuItem[i].href === currentLocation){
//         menuItem[i].className = "active"
//     }
// }