import {key, privateKey} from './Key';
import {Md5} from "md5-typescript";

console.log(Md5.init('test'));

const apiKey = key;
const hash = '697d2495efd5e542816d2261a01898d8';
//let hash = Md5.init(1 + privateKey + key);
let url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=' + key + '&hash=' + hash;
console.log(hash);

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
