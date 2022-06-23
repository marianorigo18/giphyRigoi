//Estas funciones hacen que los gif se deslicen hacer la dereche e izquierda
const carretel = document.querySelector(".contenedor-slider");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right")

btnRight.addEventListener('click', () => {
    carretel.scrollLeft += carretel.offsetWidth; /* += carretel.offsetWidth */
});

btnLeft.addEventListener('click', () => {
    carretel.scrollLeft -= carretel.offsetWidth;
})