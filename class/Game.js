"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Player_1 = require("./Player");
class Game {
    static showPlayerCreationWindow() {
        document.getElementById('player-window').style.display = "block";
    }
    static setPlayer(name) {
        const player = new Player_1.Player(name);
        localStorage.setItem('player', JSON.stringify(player));
    }
}
exports.Game = Game;
