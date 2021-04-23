window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
};


function change()
{   const menuToggle = document.querySelector('.menuToggle');
    const ham = document.getElementById('ham');

    
    if (ham.className == 'fas fa-bars') {
        ham.className = 'fas fa-times';
       }
     else {
            ham.className = 'fas fa-bars';
    }
}

    