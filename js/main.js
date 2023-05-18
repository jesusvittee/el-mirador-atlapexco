const navMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const botonSalir = document.querySelector('.menu-salir')


navMenu.addEventListener('click', toggleMobileMenu);
navMenu.addEventListener('click', removeDesktopMenu);
botonSalir.addEventListener('click', addDesktopMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
function removeDesktopMenu(){
    desktopMenu.classList.remove('inactive')
}
function addDesktopMenu(){
    desktopMenu.classList.add('inactive')
}