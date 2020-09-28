"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Key_1 = require("./Key");
var md5_typescript_1 = require("md5-typescript");
console.log(md5_typescript_1.Md5.init('test'));
var apiKey = Key_1.key;
var hash = '697d2495efd5e542816d2261a01898d8';
//let hash = Md5.init(1 + privateKey + key);
var url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=' + Key_1.key + '&hash=' + hash;
console.log(hash);
fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data); });
