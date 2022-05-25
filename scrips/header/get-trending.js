let url = 'https://api.giphy.com/v1/gifs/trending?api_key=Rp6YidxPjnYQkHnoGkOuS4mrf2PSD03Y&limit=10&rating=g';

let getData = async () => {
    await fetch(url).then((response) => {
        return response.json()
    }).then((giphy) => {
        console.log(giphy);
        for(i=0; i < giphy.data.length; i++){
            const gif = document.createElement('img');
            gif.src = giphy.data[i].images["original"].url;
            gif.className = "img__slider";
            document.getElementById("contenedor-slider").appendChild(gif)
        }
    })
}
getData();