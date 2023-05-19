const navMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const botonSalir = document.querySelector('.menu-salir');
const articleImagen = document.querySelector('.article-imagen');


navMenu.addEventListener('click', toggleMobileMenu);
navMenu.addEventListener('click', removeDesktopMenu);
botonSalir.addEventListener('click', addDesktopMenu);

const fotoLista = [];

fotoLista.push({
    imagen:'https://scontent.fmex1-6.fna.fbcdn.net/v/t39.30808-6/265519918_471481564600247_2392190754075689668_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=k_kxEvO81tkAX_sq5sH&_nc_oc=AQkVdR21G6t2XF4iyl1GXn1nVTBYLpAc6C7skHYIyj1GEoQuetLaKWTA2mj4U0QaU4xcDUKthLX1TAjrjwMXOkqD&_nc_ht=scontent.fmex1-6.fna&oh=00_AfDWTdnZS1RZ8aqrhZ2f0oxsI8QTn7rdY64ev_PZzbBDcQ&oe=646AED9F',
});
fotoLista.push({
    imagen:'https://scontent.fmex1-1.fna.fbcdn.net/v/t39.30808-6/288660762_394954082651364_2895095097902050495_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uS46-jaPJisAX9lgL19&_nc_ht=scontent.fmex1-1.fna&oh=00_AfA4m6at5zi8rpLkU5CTTxrVDpieDumGzgpj7U3rFI7cXA&oe=646C014C',
});
fotoLista.push({
    imagen:'https://scontent.fmex1-1.fna.fbcdn.net/v/t1.6435-9/101391397_103035574778183_1072789294743027712_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=zYTuWBijrxkAX-lY7t0&_nc_ht=scontent.fmex1-1.fna&oh=00_AfCYozOqfQCDL9lOrYhWmpaSl44kwkVBt3VGqIpI9mKhbw&oe=648F2E93',
});




function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
function removeDesktopMenu(){
    desktopMenu.classList.remove('inactive');
}
function addDesktopMenu(){
    desktopMenu.classList.add('inactive');
}

function contenedorImg(arr){

for (foto of arr){
    const figure = document.createElement('figure');
    figure.classList.add('contenedor-foto');

    const img = document.createElement('img');
    img.setAttribute('src', foto.imagen);

    figure.appendChild(img);
    articleImagen.appendChild(figure);
}
};
contenedorImg(fotoLista);

//  <figure class="contenedor-foto">
// <img src="https://scontent.fmex1-6.fna.fbcdn.net/v/t39.30808-6/265519918_471481564600247_2392190754075689668_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=k_kxEvO81tkAX_sq5sH&_nc_oc=AQkVdR21G6t2XF4iyl1GXn1nVTBYLpAc6C7skHYIyj1GEoQuetLaKWTA2mj4U0QaU4xcDUKthLX1TAjrjwMXOkqD&_nc_ht=scontent.fmex1-6.fna&oh=00_AfDWTdnZS1RZ8aqrhZ2f0oxsI8QTn7rdY64ev_PZzbBDcQ&oe=646AED9F" alt="">
// </figure>