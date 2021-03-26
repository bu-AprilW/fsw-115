const rm = document.getElementById("rmBtn");
rm.addEventListener("click", rickMorty);

function rickMorty() {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then((response) => {
        for (let i = 0; i < response.data.results.length; i++) {
            const name = document.createElement('h3')
            const status = document.createElement('li')
            const species = document.createElement('li')
            const gender = document.createElement('li')
            const origin = document.createElement('li')

            name.textContent = response.data.results[i].name
            status.textContent = "Status: " + response.data.results[i].status
            species.textContent = "Species: " + response.data.results[i].species
            gender.textContent = "Gender: " + response.data.results[i].gender
            origin.textContent = "Origin: " + response.data.results[i].origin.name

            document.getElementById("rm").appendChild(name)
            document.getElementById("rm").appendChild(status)
            document.getElementById("rm").appendChild(species)
            document.getElementById("rm").appendChild(gender)
            document.getElementById("rm").appendChild(origin)
        }
    })
    .catch(error => console.log(error))
}