let closeModals = document.querySelector('.modal__close');

function closeModal(){

        document.querySelector('.modal').classList.remove('modal--show')
       console.log("hello");
}

let url = 'https://api.giphy.com/v1/gifs/trending?api_key=Rp6YidxPjnYQkHnoGkOuS4mrf2PSD03Y&limit=10&rating=g';

let getData = async () => {
    await fetch(url).then((response) => {
        return response.json()
    }).then((giphy) => {
        console.log(giphy);
        for(let i=0; i < giphy.data.length; i++){
            
            let spriteContainer = document.createElement('div');
            spriteContainer.classList.add('sprite-container');

            const gif = document.createElement('img');
            gif.src = giphy.data[i].images["original"].url;
            gif.className = "img__slider";

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
            iconWideImg.classList.add("iconWideImg");

            let contentText = document.createElement('div');
            contentText.classList.add('content-text');

            let paragraph = document.createElement('p');
            paragraph.classList.add('paragraph--img');
            paragraph.textContent = giphy.data[i].username;

            let title = document.createElement('h6');
            title.classList.add('title--img');
            title.textContent = giphy.data[i].title;

            spriteContainer.appendChild(gif)

            spriteContainer.appendChild(capa);

            capa.appendChild(contentIcons);

            contentIcons.appendChild(iconFav);
            
            contentIcons.appendChild(iconWideImg);

            contentIcons.appendChild(iconDownload);

            capa.appendChild(contentText);

            contentText.appendChild(paragraph);

            contentText.appendChild(title);

            document.getElementById("contenedor-slider").appendChild(spriteContainer)


            iconFav.addEventListener('click', () => {
                alert('Me has hecho click')
            })
            iconWideImg.addEventListener('click', () => {

                let modal = document.querySelector('.modal')
                modal.classList.add('modal--show')
                modal.innerHTML = 
                `
                <div class="modal__container">
                    <div class="cont__close">
                        <img src="./assets/close.svg" class="modal__close" onclick="closeModal()" alt="">
                    </div>
                    <img src="${giphy.data[i].images["original"].url}" class="modal__img" alt="">
                    <div class="modal__info">
                        <div class="modal__text"> 
                            <p class="modal__paragraph">${giphy.data[i].username}</p>
                            <h6 class="modal__title">${giphy.data[i].title}</h6>
                        </div>
                        <div class="modal__icons">
                            <img src="./assets/icon-fav.svg" alt="">
                            <img src="./assets/icon-download.svg" alt="">
                        </div>
                    </div>
                </div>
                `

            })
            iconDownload.addEventListener('click', () =>{
                alert('hola')
            })
            
        }
    })
}
getData();
