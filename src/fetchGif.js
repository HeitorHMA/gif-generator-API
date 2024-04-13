export default function fetchGif(){


    const userInput = document.querySelector("#userInput").value;
    const imageContainer = document.querySelector(".image-container");
    const newGif = document.createElement("img");
    newGif.classList.add("user-gif");
    fetch (`https://api.giphy.com/v1/gifs/translate?api_key=3po6UvdcOfxejV7G073UKtwbqTyuDqgz&s=${userInput}`,{mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        newGif.src = response.data.images.original.url;
        console.log(response.data.images.original.url)
    });
    imageContainer.innerHTML = ""
    
    imageContainer.appendChild(newGif);

    }
