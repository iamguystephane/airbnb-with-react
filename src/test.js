const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

let addPokemon = pokemon.map((poke) =>{
    return "<p>" + poke + "</p>"
})

console.log(addPokemon)