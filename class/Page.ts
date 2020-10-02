import {Character} from "./Character";
import {Player} from "./Player";

class Page {
    public static showElementById(id: string) : void {
        (<HTMLElement>document.getElementById(id)).style.display = "block";
    }
    public static hideElementById(id: string) : void{
        (<HTMLElement>document.getElementById(id)).style.display = "none";
    }
    public static showPlayerInfo(player: Player) : void {
        (<HTMLElement>document.getElementById("player_name")).innerText = player.name;
        (<HTMLElement>document.getElementById("player-losses")).innerText = String(player.defeats);
        (<HTMLElement>document.getElementById("player-wins")).innerText = String(player.victories);
        (<HTMLElement>document.getElementById("player-money")).innerText = String(player.money);
    }

    public static showCharacterStat(id: string, description: string, stat: number): void {
        (<HTMLElement>document.getElementById(id)).innerText = description + stat;
    }
    public static showAllStats(character: Character) : void {
        this.showElementById('character-info');
        (<HTMLElement>document.getElementById('character-name')).innerText = character.name;
        (<HTMLElement>document.getElementById('character-price')).innerText = "Price: $" + character.showPrice();
        (<HTMLButtonElement>document.getElementById('buy-character')).dataset.character = character.slug;
        this.showCharacterStat('character-intelligence', 'Intelligence: ', character.stats.intelligence);
        this.showCharacterStat('character-speed', 'Speed: ', character.stats.speed);
        this.showCharacterStat('character-combat', 'Combat: ', character.stats.combat);
        this.showCharacterStat('character-strength', 'Strength: ', character.stats.strength);
        this.showCharacterStat('character-power', 'Power: ', character.stats.power);
        this.showCharacterStat('character-durability', 'Durability: ', character.stats.durability);
    }
}

export {Page}