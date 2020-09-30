import {key} from './Key';
import {CharacterList} from "./class/CharacterList";
import {Character} from "./class/Character";
import {Stats} from "./class/Stats";
import {Avatar} from "./class/Avatar";
import {Player} from "./class/Player";
import {Game} from "./class/Game";

//let url = 'http://superheroapi.com/api.php/' + key + '/1';
let url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
console.log(url);
const dropdown = document.getElementById('characters')
const showPlayerBtn = document.getElementById('open-player')
const createPlayerBtn = document.getElementById('create-player');

let characterList = new CharacterList();
fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(entry => {
            let avatar = new Avatar(entry.images.md);
            let powerStats = entry.powerstats;
            let stats = new Stats(powerStats.intelligence, powerStats.strength, powerStats.speed, powerStats.durability, powerStats.power, powerStats.combat); //entry.powerstats.intelligence etc
            let hero = new Character(entry.id, entry.name, stats, avatar)
            characterList.add(hero)
            let option = document.createElement("option"); //'<option>${entry.name}</option>'
            option.innerText = hero.name;
            dropdown.appendChild(option)
        })
        console.log(characterList.search('A-Bomb'))
    });



let player = JSON.parse(localStorage.getItem('player'));

if(player){
    (document.getElementById('profile-picture')).src = player.profileImg; // <HTMLImageElement>
}

showPlayerBtn.addEventListener('click', () => {
    Game.showPlayerCreationWindow();
})

createPlayerBtn.addEventListener('click', () => {
    let name = document.getElementById('player-name').value;
    Game.setPlayer(name);
})