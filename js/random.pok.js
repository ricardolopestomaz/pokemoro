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
            img = pokemon.sprites.front_default
            console.log("Nome: "+name)
            console.log("\nId: "+id)
            console.log("\nimg: "+ img)

            document.querySelector(".pomodoro__pokebola").innerHTML = `
            <img src="${pokemon.sprites.front_default}"/>
            `

            if(rare.includes(id) == true){
                console.log('Raro')
            }
            else if(legendary.includes(id) == true){
                console.log('Lendario')
            }
            else{
                console.log('Comum')
            }
        })
    }
    fetchPokemon()
}

pull()

console.log(name)