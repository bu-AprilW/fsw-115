const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showInfo(data.objects[0])
        
    }
};

function showInfo(arr) {
    for (let i = 0; i < arr.pokemon.length; i++) {
        const h1 = document.createElement("h1")
        h1.textContent = arr.pokemon[i].name
        document.body.appendChild(h1)
        const h3 = document.createElement("h3")
        h3.textContent = arr.pokemon[i].resource_uri
        document.body.appendChild(h3)
    }
};