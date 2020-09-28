import {key} from './Key';

let url = 'https://superheroapi.com/api/' + key + '/1/powerstats/';
console.log(url);

fetch(url, {mode: 'no-cors'})
    .then(response => response.json())
    .then(data => console.log(data))
