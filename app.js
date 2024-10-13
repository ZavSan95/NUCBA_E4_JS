function fetchPokemon(){

    const pokemonId = document.getElementById("pokemonNumber").value;
    const pokemonContainer = document.getElementById("pokemonContainer");

    pokemonContainer.innerHTML = "";

    if(!pokemonId){
        pokemonContainer.innerHTML = '<p class="error"> Por favor, ingrese un número.</p>';
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => {

            if(!response.ok){
                throw new Error('No se encontró ningún pokemon con ese ID');
            }
            return response.json();
        })
        .then(data => {

            const pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            const pokemonType = data.types.map(typeInfo => typeInfo.type.name).join(', ');
            const pokemonHeight = (data.height / 10).toFixed(2); // Convertir a metros
            const pokemonWeight = (data.weight / 10).toFixed(2); // Convertir a kilogramos
            const pokemonImage = data.sprites.front_default;

            const pokeCard = `
                <div class="poke-card">
                    <img src="${pokemonImage}" alt="${pokemonName}">
                    <h2>${pokemonName}</h2>
                    <p><strong>Tipo:</strong> ${pokemonType}</p>
                    <p><strong>Altura:</strong> ${pokemonHeight} metros</p>
                    <p><strong>Peso:</strong> ${pokemonWeight} kilogramos</p>
                </div>
            `;

            pokemonContainer.innerHTML = pokeCard;
            
        })
        .catch(error =>{

            pokemonContainer.innerHTML = `<p class="error">${error.message}</p>`;
        });
}