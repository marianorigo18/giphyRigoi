//esta funcion cambiar los estilos de algunos iconos e imagenes
let fotoMostrada = "burgerlila"

function cambiarMenuDarkmode(){
    let img = document.getElementById('burger-icon');
    let navLogo = document.getElementById('nav-log');
    let searchLupa = document.getElementById('search-lupa');
    if(fotoMostrada == "burgerlila"){
        img.src = "./assets/burger-modo-noct.svg";
        navLogo.src = "./assets/Logo-modo-noc.svg";
        searchLupa.src = "./assets/icon-search-modo-noct.svg"
        fotoMostrada = "burgerdark";
    }else{
        img.src = "./assets/burger.svg";
        navLogo.src = "./assets/logo-desktop.svg";
        searchLupa.src = "./assets/icon-search.svg"
        fotoMostrada = "burgerlila";
    }
}