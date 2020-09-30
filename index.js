"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {key} from './Key';
const CharacterList_1 = require("./class/CharacterList");
const Character_1 = require("./class/Character");
const Stats_1 = require("./class/Stats");
const Avatar_1 = require("./class/Avatar");
const Game_1 = require("./class/Game");
//let url = 'http://superheroapi.com/api.php/' + key + '/1';
let url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
console.log(url);
const dropdown = document.getElementById('characters');
const showPlayerBtn = document.getElementById('open-player');
const createPlayerBtn = document.getElementById('create-player');
let characterList = new CharacterList_1.CharacterList();
fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(entry => {
        let avatar = new Avatar_1.Avatar(entry.images.md);
        let powerStats = entry.powerstats;
        let stats = new Stats_1.Stats(powerStats.intelligence, powerStats.strength, powerStats.speed, powerStats.durability, powerStats.power, powerStats.combat); //entry.powerstats.intelligence etc
        let hero = new Character_1.Character(entry.id, entry.name, entry.slug, stats, avatar);
        characterList.add(hero);
        let option = document.createElement("option"); //'<option>${entry.name}</option>'
        option.innerText = hero.name;
        option.value = hero.slug;
        dropdown.appendChild(option);
    });
    console.log(characterList.search('142-bumblebee').showPrice());
});
let player = JSON.parse(localStorage.getItem('player'));
if (player) {
    console.log(player);
    console.log(player.profileImg);
    document.getElementById('player-header').style.display = "block";
    /*const img = document.getElementById('profile-picture')
    console.log(img)//.src = player.profileImg; // <HTMLImageElement>
    img.setAttribute('src', player.profileImg);*/
}
showPlayerBtn.addEventListener('click', () => {
    Game_1.Game.showPlayerCreationWindow();
});
createPlayerBtn.addEventListener('click', () => {
    let name = document.getElementById('player-name').value;
    Game_1.Game.setPlayer(name);
});
dropdown.addEventListener('change', () => {
    let searchFor = dropdown.value;
    console.log(characterList.search(searchFor));
});
