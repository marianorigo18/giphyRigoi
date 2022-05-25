const carretel = document.querySelector(".contenedor-slider");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right")

btnRight.addEventListener('click', () => {
    carretel.scrollLeft += 450; /* += carretel.offsetWidth */
});

btnLeft.addEventListener('click', () => {
    carretel.scrollLeft -= carretel.offsetWidth;
})