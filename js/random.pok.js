// RANDOM POKEMON
var id = Math.floor(Math.random() * 150) + 1
// PULL POKEMON
const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    fetch(url)
    .then(response => response.json())
    .then(pokemon => {
        console.log("Nome: "+pokemon.name+"\nId: "+pokemon.id)

    })

}


fetchPokemon()
