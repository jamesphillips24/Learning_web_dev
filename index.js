const text = document.getElementById("text");
const img = document.getElementById("pokemon");
const p = document.getElementById("notfound");

/*fetch("https://pokeapi.co/api/v2/pokemon/mudkip")
    .then(response => response.json())
    .then(data => console.log(data));*/

async function fetchPokemon(){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${text.value.toLowerCase()}`);

        if(text.value == ""){
            img.style.display = "none";
            p.innerHTML = "Enter a pokemon."
            throw new Error("No input.")
        }
        else if(!response.ok || text.value == ""){
            img.style.display = "none";
            p.innerHTML = "Pokemon not found."
            throw new Error("Pokemon not found.");
        }
        else{
            const data = await response.json();
            p.innerHTML = ""
            img.style.display = "block";
            img.src = `${data.sprites.front_default}`;
        }
    }
    catch(error){
        console.log(error)
    }
}