const xhr_planets = new XMLHttpRequest();
const xhr_person = new XMLHttpRequest();
const xhr_toDo = new XMLHttpRequest();

//List of Planets

xhr_planets.open("GET", "https://swapi.dev/api/planets/", true);
xhr_planets.send();

//GET One Person

xhr_person.open("GET", "https://swapi.dev/api/people/3/", true);
xhr_person.send();

//GET ToDo Objects

xhr_toDo.open("GET", "https.api.vschool.io/aprilwilliams/todo/", true);
xhr_toDo.send();

//Planets onreadystatechange

xhr_planets.onreadystatechange = function() {
    console.log(" ");
    console.log(" ");
    console.log("onReadyStateChange");
    if (xhr_planets.readyState === 4 && xhr_planets.status === 200) {
        console.log("200 ok");
        const JSONdata = xhr_planets.responseText;
        const data = JSON.parse(JSONdata);
        console.log("data: " + JSON.stringify(data));
        const results = data.results;
        showPlanets(results);
    }
};

//Person onreadystatechange

xhr_person.onreadystatechange = function() {
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log("onReadyStateChange");
    if (xhr_person.readyState === 4 && xhr_person.status === 200) {
        console.log("200 ok");
        const JSONdata = xhr_person.responseText;
        const data = JSON.parse(JSONdata);
        console.log("data: " + JSON.stringify(data));
        const results = data;
        showPerson(results);
    }
};

//showPlanets

function showPlanets(planets) {
    var title = document.createElement("h1");
    title.innerHTML = "Planets";
    document.body.appendChild(title);
    for (let i = 0; i < planets.length; i++) {
        console.log(planets[i]);
        var div = document.createElement("div");
        div.textContent = planets[i].name;
        document.body.appendChild(div);
    }
}

//showPerson

function showPerson(person) {
    var title = document.createElement("h1");
    title.innerHTML = "Person";
    document.body.appendChild(title);
    console.log();
    var div = document.createElement("div");
    div.textContent = person.name;
    document.body.appendChild(div);
}

//Todo onReadyStateChange

xhr_toDo.onreadystatechange = function() {
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log("onReadyStateChange");
    if (xhr_toDo.readyState === 4 && xhr_toDo.status === 200) {
        console.log("200 ok");
        const JSONdata = xhr_toDo.responseText;
        const data = JSON.parse(JSONdata);
        console.log("data: " + JSON.stringify(data));
        const results = data.results;
        showToDo(results);
        console.log(results);
    }
};

//showToDo

function showToDo(toDo) {
    var title = document.createElement("h1");
    title.innerHTML = "ToDo";
    document.body.appendChild(title);
    for (let i = 0; i < toDo.length; i++) {
        console.log(toDo[i]);
        var div = document.createElement("div");
        div.textContent = toDo[i].name;
        document.body.appendChild(div);
    }
}