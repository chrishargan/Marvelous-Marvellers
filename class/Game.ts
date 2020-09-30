import {Player} from "./Player";

class Game {
    public static showPlayerCreationWindow(){
        document.getElementById('player-window').style.display = "block";
    }
    public static setPlayer(name : string) : void {
        const player = new Player(name);
        localStorage.setItem('player', JSON.stringify(player));
    }
}
export {Game}