    //
    // const currentLocation = location.href;
    // const menuItem = document.querySelectorAll('.menu a');
    // const menuLength = menuItem.length
    // for (let i = 0; i < menuLength; i++ ) {
    //     if (menuItem[i].href === currentLocation){
    //         menuItem[i].className = "active"
    //     }
    // }

    const toggleBtn = document.querySelector('.navbar__toogleBtn');
    const menu = document.querySelector('.menu');
    const icons = document.querySelector('.navbar__icons');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });