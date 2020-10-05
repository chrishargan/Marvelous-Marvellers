import {Player} from "./Player";
import {Page} from "./Page";

class Game {
    /*public static showPlayerCreationWindow(){
        document.getElementById('player-window').style.display = "block";
    }*/

    private static _player: Player | undefined;

    public static setPlayer(name : string) : void {
        if(this.player){
            if(!confirm("You are already playing under " + this.player.name + "!\n Are you sure you want to reset?")){
                return
            }
        }
        const player = new Player(name, 1000, 0, 0, new Map());
        //localStorage.setItem('player', JSON.stringify(player));
        this._player = player;
        Page.showPlayerInfo(player);
        Page.showElementById('player-header');
        Page.hideElementById('player-window')
    }


    static get player(): Player | undefined {
        return this._player;
    }


    static set player(value: Player | undefined) {
        this._player = value;
        //localStorage.setItem('player', JSON.stringify(value));
        if(value) {
            Page.showPlayerInfo(value);
            Page.showElementById('player-header');
        }

    }
}
export {Game}