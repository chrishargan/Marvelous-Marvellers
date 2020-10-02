//import {key} from './Key';
import {Player} from "./class/Player";
import {CharacterList} from "./class/CharacterList";
import {Character} from "./class/Character";
import {Stats} from "./class/Stats";
import {Avatar} from "./class/Avatar";
import {Game} from "./class/Game";
import {Page} from "./class/Page";

//let url = 'http://superheroapi.com/api.php/' + key + '/1';
let url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
console.log(url);
const dropdown = (<HTMLElement>document.getElementById('characters'));
const showPlayerBtn = <HTMLButtonElement>document.getElementById('open-player')
const createPlayerBtn = <HTMLButtonElement>document.getElementById('create-player');
const buyBtn = (<HTMLElement>document.getElementById('buy-character'));

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

(<HTMLElement>document.getElementById('character-info')).style.display = "none";


let player = JSON.parse(<string>localStorage.getItem('player'));

if(!player) console.log("no player")

if(player){
    console.log(player);
    console.log(player._name);
    let team : Map<string, Character> = new Map(Object.entries(player._team));
    Game.player = new Player(player._name, player._money, player._victories, player._defeats, team);
    Page.showElementById('player-header');
    Page.showPlayerInfo(Game.player);

}

showPlayerBtn.addEventListener('click', () => {
    //Game.showPlayerCreationWindow();
    Page.showElementById('player-window');
})

createPlayerBtn.addEventListener('click', () => {
    let name = (<HTMLInputElement>document.getElementById('player-name')).value;
    Game.setPlayer(name);
})

dropdown.addEventListener('change', () => {
    let searchFor = (<HTMLInputElement>dropdown).value;
    console.log(characterList.search(searchFor));
    Page.showAllStats(<Character>characterList.search(searchFor));
})

buyBtn.addEventListener('click', (e) => {

    if(!Game.player) return;
    let search = (<HTMLButtonElement>e.target).dataset.character;
    let character = characterList.search(<string>search);
    /*let outcomeMsg: string = Game.player.handleBuying(<Character>character);
    (<HTMLElement>document.getElementById('message')).innerText = outcomeMsg;*/
    console.log(character)
    console.log(Game.player)
    Game.player.addMoney(100)
    Game.player.handleBuying(<Character>character);
})

window.addEventListener("beforeunload", () => {
    if(Game.player){
        localStorage.setItem("player", JSON.stringify(Game.player));
    }
})
