//Rare
const rare = [3,6,9,26,31,34,38,59,65,68,94,115,130,131,132,137,139,141,142,143,149]
//Legendary
const legendary = [144,145,146,150,151]

// RANDOM POKEMON
let id = Math.floor(Math.random() * 151) + 1
// PULL POKEMON

function pull(){
    const fetchPokemon = (name, img) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            name = pokemon.name
            const dimencion = true
            let img
            if(dimencion == false){
                img = `https://professorlotus.com/Sprites/sugimori/${name}.png`
            }
            
            else{
                img = `https://professorlotus.com/Sprites/${name}.gif`
            }

            document.querySelector("#pokemon--name").innerHTML = `${name}`
            document.querySelector("#pokemon--id").innerHTML = `ID: ${id}`
            document.querySelector(".pokemon__image").innerHTML = `
            <img id="pokemon--img" src="${img}" alt="Pokemon Image"/>`
        })
    }
    fetchPokemon()
}

pull()
