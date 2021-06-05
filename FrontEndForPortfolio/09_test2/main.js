const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length
for (let i = 0; i < menuLength; i++ ) {
    if (menuItem[i].href === currentLocation){
        menuItem[i].className = "active"
    }
}

// var nav = document.querySelector('.nav');
// var list = document.querySelector('li');

// nav.addEventListener("click", (e) =>{
//     list.querySelector(".active").classList.remove("active");
//     e.target.classList.add("active");
// })