const aT = document.getElementById("adventureTimeBtn");
aT.addEventListener("click", adventure_time);

function adventure_time() {
    axios.get("https://adventuretimeapi.herokuapp.com/people/")
    .then((response) => {
        for (let i = 0; i < response.data.results.length; i++) {
            const name = document.createElement('h3')
            const fullName = document.createElement('li')
            const gender = document.createElement('li')
            const url = document.createElement('li')

            name.textContent = response.data.results[i].name
            fullName.textContent = "Full Name: " + response.data.results[i].full_name
            gender.textContent = "Gender: " + response.data.results[i].gender
            url.textContent = "Url: " + response.data.results[i].url

            document.getElementById("adventureTime").appendChild(name)
            document.getElementById("adventureTime").appendChild(fullName)
            document.getElementById("adventureTime").appendChild(gender)
            document.getElementById("adventureTime").appendChild(url)
        }
    })
    .catch(error => console.log(error))
}