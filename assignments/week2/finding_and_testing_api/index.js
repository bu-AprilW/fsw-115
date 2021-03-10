const character = {
    "results": [{
        'name': 'Chewbacca',
        'height': '228',
        'mass': '112',
        'hair_color': 'brown',
        'skin_color': 'unknown',
        'eye_color': 'blue',
        'birth_year': '200BBY',
        'gender': 'male'
    }]
}

const obj = JSON.stringify(character);
document.body.innerHTML = obj;