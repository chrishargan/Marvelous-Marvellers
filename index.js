"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Key_1 = require("./Key");
var url = 'https://superheroapi.com/api/' + Key_1.key + '/1/powerstats/';
console.log(url);
fetch(url, { mode: 'no-cors' })
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data); });
