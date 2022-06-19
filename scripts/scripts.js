window.onload = () => {
    // Menu Scroll
    const menu = document.querySelector('.page__header');
    const offset = menu.offsetTop;

    document.addEventListener('scroll', (e) => {
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
            menu.classList.add('fixed');
        } else {
            menu.classList.remove('fixed');
        }
    })

    // Menu Mobile
    const buttonMenu = document.querySelector('.js-button-menu');
    const menuBody = document.querySelector('.menu__links');
    const menuLink = document.querySelectorAll('.menu__item');

    buttonMenu.addEventListener('click', (e) => {
        e.preventDefault();
        menuBody.classList.toggle('visible');
    })

    menuLink.forEach((link) => {
        link.addEventListener('click', (e) => {
            menuLink.forEach((item) => {
                item.classList.remove('active');
            });
            
            e.currentTarget.classList.add('active');
            if (menuBody.classList.contains('visible')) menuBody.classList.remove('visible');
        })
    })
}