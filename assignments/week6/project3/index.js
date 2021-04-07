async function getData() {

    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character/1")
        const rickOrigin = await axios.get(response.data.origin.url)
        const rickLocation = await axios.get(response.data.location.url)
        listToDom(rickOrigin, rickLocation, response)
    }

    catch(error) {
        console.log(error)
    }
}
getData()


const mainInfo = document.getElementById("info")

function listToDom(rickOrigin, rickLocation, rick) {

    const nameh1 = document.createElement("h1")
    nameh1.textContent = rick.data.name
    mainInfo.appendChild(nameh1)
    const pic = document.createElement("img")
    pic.src = rick.data.image
    mainInfo.appendChild(pic)
    const spec = document.createElement("h1")
    spec.textContent = "Species: " + rick.data.species
    mainInfo.appendChild(spec)
    const h1 = document.createElement("h1")
    h1.textContent = "Origin: " + rickOrigin.data.name
    mainInfo.appendChild(h1)
    const originDim = document.createElement("h2")
    originDim.textContent = "Origin Dimension: " + rickOrigin.data.originDim
    mainInfo.appendChild(originDim)
    const location = document.createElement("h1")
    location.textContent = "Current Location: " + rickLocation.data.name
    mainInfo.appendChild(location)
    const locationDim = document.createElement("h2")
    locationDim.textContent = "Current Location Dimension: " + rickLocation.data.dimension
    mainInfo.appendChild(locationDim)
}


const div = document.getElementById("episodes")

async function rickAndMorty() {
    const character = await axios.get("https://rickandmortyapi.com/api/character/1")
    const episode = character.data.episodes
    const pendingPromises = []

    for(let i = 0; i < episodes.length; i++) {
        pendingPromises.push(axios.get(episodes[i]))
    }

    Promise.all(pendingPromises)

    .then(response => {
        for (let i = 0; i < episodes.length; i++) {
            const name = document.createElement("h1")
            name.textContent = "Episode Title: " + response[i].data.name
            div.appendChild(name)
            const eps = document.createElement("h2")
            eps.textContent = "Season/Episode: " + response[i].data.episodes
            div.appendChild(eps)
            const air = document.createElement("h3")
            air.textContent = "Date Aired: " + response[i].data.air_date
            div.appendChild(air)
        }
    })
    .catch(error => console.log(error))
}
rickAndMorty()