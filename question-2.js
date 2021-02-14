let game = document.querySelector("#game")
game.innerHTML = "LOADING....."


function getData (){
    fetch("https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-ratings")
    .then(response => {
        if(!response.ok){
            throw Error("Error");
        }
        return response.json();
    })
    .then(data =>{console.log(data.results)
        game.innerHTML = ""
        for (let i = 0; i < 8; i++){
        game.innerHTML += `<div class="gameItem">
        <p>Name: ${data.results[i].name}</p> 
        <p> Rating: ${data.results[i].rating}</p> 
        <p>Nr of tags: ${data.results[i].tags.length}</p>
        </div>`

}  
    }).catch(error => console.log(error));
}

 getData()
  