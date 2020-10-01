//import {key} from './Key';
import {CharacterList} from "./class/CharacterList";
import {Character} from "./class/Character";
import {Stats} from "./class/Stats";
import {Avatar} from "./class/Avatar";
import {Player} from "./class/Player";
import {Game} from "./class/Game";

//let url = 'http://superheroapi.com/api.php/' + key + '/1';
let url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
console.log(url);
const dropdown = (<HTMLElement>document.getElementById('characters'));
const showPlayerBtn = <HTMLButtonElement>document.getElementById('open-player')
const createPlayerBtn = <HTMLButtonElement>document.getElementById('create-player');

let characterList = new CharacterList();
fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(entry => {
            let avatar = new Avatar(entry.images.md);
            let powerStats = entry.powerstats;
            let stats = new Stats(powerStats.intelligence, powerStats.strength, powerStats.speed, powerStats.durability, powerStats.power, powerStats.combat); //entry.powerstats.intelligence etc
            let hero = new Character(entry.id, entry.name, entry.slug, stats, avatar)
            characterList.add(hero)
            let option = document.createElement("option"); //'<option>${entry.name}</option>'
            option.innerText = hero.name;
            option.value = hero.slug;
            dropdown.appendChild(option)
        })
    });



let player = JSON.parse(<string>localStorage.getItem('player'));

if(player){
    console.log(player);
    console.log(player.profileImg);
    (<HTMLElement>document.getElementById('player-header')).style.display = "block";
    //<HTMLElement>document.getElementById("player-header")
    /*const img = document.getElementById('profile-picture')
    console.log(img)//.src = player.profileImg; // <HTMLImageElement>
    img.setAttribute('src', player.profileImg);*/
}

showPlayerBtn.addEventListener('click', () => {
    Game.showPlayerCreationWindow();
})

createPlayerBtn.addEventListener('click', () => {
    let name = (<HTMLInputElement>document.getElementById('player-name')).value;
    Game.setPlayer(name);
})

dropdown.addEventListener('change', () => {
    let searchFor = (<HTMLInputElement>dropdown).value;
    console.log(characterList.search(searchFor))
})