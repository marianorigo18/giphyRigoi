let contentResult = document.getElementById('content__result');
let blockButton = document.getElementById('inspirate-block-button');



const busqueda = '?q=';
const key = '&api_key=Rp6YidxPjnYQkHnoGkOuS4mrf2PSD03Y';
const limite = '&limit=12'

let q = "";

let urlcompleta = "";

const lupaBtn = document.getElementById('lupa__btn');

lupaBtn.onclick = () => {

    document.getElementById('content__result').innerHTML = "";
    blockButton.innerHTML = "";

    q = document.getElementById("inspirate__input").value;

    document.getElementById('title--result').innerHTML = `${q}`
    
    urlcompleta = 'https://api.giphy.com/v1/gifs/search' + busqueda + q + key + limite;

    let buttonIns = document.createElement('button');
    buttonIns.classList.add('inspirate--button');
    let buttonA = document.createElement('a');
    buttonA.classList.add('button--a');
    buttonA.textContent = "VER MAS"

    buttonIns.appendChild(buttonA);
    blockButton.appendChild(buttonIns);
    
    getSearch()
}

const getSearch = async () => {

    await fetch(urlcompleta).then((response) => {
        return response.json();

    }).then((giphy) =>{ (giphy)

        for(let i=0; i < giphy.data.length; i++){

            let spriteContainer = document.createElement('div');
            spriteContainer.classList.add('sprite-container');

            const gif = document.createElement('img');
            gif.src = giphy.data[i].images["original"].url;
            gif.className = "contenido";

            let capa = document.createElement('div');
            capa.classList.add('capa');

            let contentIcons = document.createElement('div');
            contentIcons.classList.add('content-icons');

            let iconFav = document.createElement('img')
            iconFav.src = './assets/icon-fav.svg';

            let iconDownload = document.createElement('img')
            iconDownload.src = './assets/icon-download.svg';

            let iconWideImg = document.createElement('img');
            iconWideImg.src = './assets/icon-max-normal.svg';
            iconWideImg.setAttribute("data-target", "#modal" )

            let contentText = document.createElement('div');
            contentText.classList.add('content-text');

            let paragraph = document.createElement('p');
            paragraph.classList.add('paragraph--img');
            paragraph.textContent = giphy.data[i].username;

            let title = document.createElement('h6');
            title.classList.add('title--img');
            title.textContent = giphy.data[i].title;

            spriteContainer.appendChild(gif); 
            spriteContainer.appendChild(capa);
            capa.appendChild(contentIcons);
            contentIcons.appendChild(iconFav);
            contentIcons.appendChild(iconWideImg);
            contentIcons.appendChild(iconDownload);
            capa.appendChild(contentText)
            contentText.appendChild(paragraph);
            contentText.appendChild(title);
            contentResult.appendChild(spriteContainer);

            iconFav.addEventListener('click', () => {
                alert('Al parecer te gustan los Gifs')
            })

            iconDownload.addEventListener('click', () =>{
                alert('hola')
            })
            
        }

    })
}
