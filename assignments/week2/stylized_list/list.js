const leiaInfo = 
{
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female",
    "homeworld": "http://swapi.dev/api/planets/2/",
    "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
        "http://swapi.dev/api/vehicles/30/"
    ],
    "starships": [],
    "created": "2014-12-10T15:20:09.791000Z",
    "edited": "2014-12-20T21:17:50.315000Z",
    "url": "http://swapi.dev/api/people/5/"
}


const values = Object.values(leiaInfo);
const entries= Object.entries(leiaInfo);
const info = document.getElementById('info');

info.innerHTML = '<ul>' + entries.map(function(item) {
    return '<li> ${item[0]} ${item[1]} </li>';
}).join('') + '</ul>'