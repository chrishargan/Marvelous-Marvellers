import {Character} from "./Character";
import {Player} from "./Player";

class Page {
    public static showElementById(id: string) : void {
        (<HTMLElement>document.getElementById(id)).style.display = "block";
    }
    public static hideElementById(id: string) : void{
        (<HTMLElement>document.getElementById(id)).style.display = "none";
    }
    public static hideAllExceptId(id: string) : void {
        this.hideElementById('player-window');
        this.hideElementById('home-window');
        this.hideElementById('character-window');
        this.hideElementById('battle-window');

        this.showElementById(id);
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
        this.hideElementById('player-window');
        this.showElementById('character-info');
        (<HTMLElement>document.getElementById('character-name')).innerText = character.name;
        (<HTMLElement>document.getElementById('character-price')).innerText = "Price: $" + character.showPrice();
        (<HTMLImageElement>document.getElementById('character-avatar')).src = character.avatar.portrait;
        (<HTMLButtonElement>document.getElementById('buy-character')).dataset.character = character.slug;
        this.showCharacterStat('character-intelligence', 'Intelligence: ', character.stats.intelligence);
        this.showCharacterStat('character-speed', 'Speed: ', character.stats.speed);
        this.showCharacterStat('character-combat', 'Combat: ', character.stats.combat);
        this.showCharacterStat('character-strength', 'Strength: ', character.stats.strength);
        this.showCharacterStat('character-power', 'Power: ', character.stats.power);
        this.showCharacterStat('character-durability', 'Durability: ', character.stats.durability);
    }
    public static showPlayer(player: Player) : void {
        (<HTMLElement>document.getElementById('player-window-name')).innerText = player.name;
        const table : HTMLElement = (<HTMLElement>document.getElementById('player-window-team'));
        table.innerHTML = "";
        //rewrite this
        table.appendChild(document.createElement('tr').appendChild(document.createElement('th').appendChild(document.createTextNode('Character Name'))));

        player.team.forEach(member => {
            const row : HTMLElement = document.createElement('tr');
            const td : HTMLElement = document.createElement('td');
            td.innerText = member.name;
            row.appendChild(td);
            table.appendChild(row);

        })
    }
}

export {Page}