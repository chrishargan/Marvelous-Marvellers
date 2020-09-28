"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//let url = 'http://superheroapi.com/api.php/' + key + '/1';
var url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
console.log(url);
fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data); });
