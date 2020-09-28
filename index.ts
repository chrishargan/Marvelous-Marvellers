import {key} from './Key';

//let url = 'http://superheroapi.com/api.php/' + key + '/1';
let url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
console.log(url);

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
