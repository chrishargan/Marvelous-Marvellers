"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterList_1 = require("./class/CharacterList");
var Character_1 = require("./class/Character");
var Stats_1 = require("./class/Stats");
var Avatar_1 = require("./class/Avatar");
var Game_1 = require("./class/Game");
//let url = 'http://superheroapi.com/api.php/' + key + '/1';
var url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
console.log(url);
var dropdown = document.getElementById('characters');
var showPlayerBtn = document.getElementById('open-player');
var createPlayerBtn = document.getElementById('create-player');
var characterList = new CharacterList_1.CharacterList();
fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data.forEach(function (entry) {
        var avatar = new Avatar_1.Avatar(entry.images.md);
        var powerStats = entry.powerstats;
        var stats = new Stats_1.Stats(powerStats.intelligence, powerStats.strength, powerStats.speed, powerStats.durability, powerStats.power, powerStats.combat); //entry.powerstats.intelligence etc
        var hero = new Character_1.Character(entry.id, entry.name, stats, avatar);
        characterList.add(hero);
        var option = document.createElement("option"); //'<option>${entry.name}</option>'
        option.innerText = hero.name;
        dropdown.appendChild(option);
    });
    console.log(characterList.search('A-Bomb'));
});
var player = JSON.parse(localStorage.getItem('player'));
if (player) {
    (document.getElementById('profile-picture')).src = player.profileImg; // <HTMLImageElement>
}
showPlayerBtn.addEventListener('click', function () {
    Game_1.Game.showPlayerCreationWindow();
});
createPlayerBtn.addEventListener('click', function () {
    var name = document.getElementById('player-name').value;
    Game_1.Game.setPlayer(name);
});
