const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata);
        const object = data.objects[0]
        const x = object.pokemon
        pokemon(x)
    }
}

function pokemon (arr) {
    arr.map(function(pokemon) {
        let h1 = document.createElement("h1")
        h1.innerHTML = pokemon.name
        document.body.append(h1)
    })
}