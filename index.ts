//import {key} from './Key';
import {Player} from "./class/Player";
import {CharacterList} from "./class/CharacterList";
import {Character} from "./class/Character";
import {Stats} from "./class/Stats";
import {Avatar} from "./class/Avatar";
import {Game} from "./class/Game";
import {Page} from "./class/Page";
import {Battle} from "./class/Battle";

//let url = 'http://superheroapi.com/api.php/' + key + '/1';
let url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
console.log(url);
const dropdown = (<HTMLElement>document.getElementById('characters'));
const showPlayerBtn = <HTMLButtonElement>document.getElementById('open-player');
const showHomeBtn = <HTMLButtonElement>document.getElementById('open-home');
const showBattleBtn = <HTMLButtonElement>document.getElementById('open-battle');
const showCharactersBtn = <HTMLButtonElement>document.getElementById('open-character');
const createPlayerBtn = <HTMLButtonElement>document.getElementById('create-player');
const buyBtn = (<HTMLElement>document.getElementById('buy-character'));
const chosenCharacter = (<HTMLElement>document.getElementById('chosen-character'));
const chosenCharacterDropdown = <HTMLInputElement>document.getElementById('team-list');
const battleRandomBtn = <HTMLButtonElement>document.getElementById('battle-random');

let characterList = new CharacterList();
fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach((entry:any) => {
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
    //let team : Map<string, Character> = new Map(Object.entries(player._team));
    let team: Map<string,Character> = new Map(JSON.parse(player._mapToArray)); //Map<string, object>
    Game.player = new Player(player._name, player._money, player._victories, player._defeats);

    team.forEach((character:any)=> {
        let stats = new Stats(character._stats._intelligence, character._stats._strength, character._stats._speed, character._stats._durability,character._stats._power,character._stats._combat);
        let avatar = new Avatar(character._avatar._portrait);
        let characterToAdd = new Character(character._id, character._name, character._slug, stats, avatar);

        (<Player>Game.player).addToTeam(characterToAdd);
    })
    //Game.player.setTeamMap(team);
    Page.showElementById('player-header');
    Page.showPlayerInfo(Game.player);

    Game.player.team.forEach((character : Character) => {
        const option = document.createElement('option');
        option.value = character.slug;
        option.innerText = character.name;
        (<HTMLElement>document.getElementById('team-list')).appendChild(option);
    })

}

showPlayerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    Page.hideAllExceptId('player-window');
    if(Game.player){
        Page.showPlayer(Game.player);
    }
})

showBattleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    (<HTMLInputElement>document.getElementById('team-list')).value = "";
    Page.hideElementById('chosen-character-img');
    chosenCharacter.innerText = "";
    Page.hideAllExceptId('battle-window');
})
showCharactersBtn.addEventListener('click', (e) => {
    e.preventDefault();
    Page.hideAllExceptId('character-window');
})
showHomeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    Page.hideAllExceptId('home-window');
})

createPlayerBtn.addEventListener('click', () => {
    let name = (<HTMLInputElement>document.getElementById('player-name')).value;
    Game.setPlayer(name);
})

dropdown.addEventListener('change', () => {
    (<HTMLElement>document.getElementById('message')).innerText = "";
    let searchFor = (<HTMLInputElement>dropdown).value;
    console.log(characterList.search(searchFor));
    Page.showAllStats(<Character>characterList.search(searchFor));
})

buyBtn.addEventListener('click', (e) => {

    if(!Game.player) return;
    let search = (<HTMLButtonElement>e.target).dataset.character;
    let character = characterList.search(<string>search);
    (<HTMLElement>document.getElementById('message')).innerText = Game.player.handleBuying(<Character>character);
    console.log(character)
    console.log(Game.player)
    //Game.player.addMoney(100)
    Game.player.handleBuying(<Character>character);
})

chosenCharacterDropdown.addEventListener('change', () => {
    Page.hideElementById('chosen-character-img');
    let searchFor = (<HTMLInputElement>document.getElementById('team-list')).value;
    let result : Character = <Character>characterList.search(searchFor);

    let img = (<HTMLImageElement>document.getElementById('chosen-character-img')).src = result.avatar.portrait;
    console.log(result)
    let name = <HTMLElement>document.getElementById('chosen-character');
    //img.src = result.avatar.portrait;
    Page.showElementById('chosen-character-img')
    name.innerText = result.name;

})

battleRandomBtn.addEventListener('click', () => {
    if(Game.player?.chosenCharacter){
        let battle = new Battle(Game.player.chosenCharacter, characterList.returnRandomCharacter());
    } else alert("Choose your character first");
})



window.addEventListener("beforeunload", () => {
    if(Game.player){
        Game.player.convertMapToArray();
        localStorage.setItem("player", JSON.stringify(Game.player));

    }
})

