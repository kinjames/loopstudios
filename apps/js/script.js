const menuBtns = document.getElementById("menuBtn");
const mobileMenu = document.querySelector(".mobile-menu");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const main = document.querySelector("html");





menuBtns.addEventListener('click', function() {
    if (mobileMenu.classList.contains('hide')){
        menuBtns.classList.add('burger');
        mobileMenu.classList.remove('hide');
        mobileMenu.classList.add('active');
        body.classList.add('noscroll');
    } else {
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('hide');
        menuBtns.classList.remove('burger');
        body.classList.remove('noscroll');
    }
})