"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Player_1 = require("./Player");
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.showPlayerCreationWindow = function () {
        document.getElementById('player-window').style.display = "block";
    };
    Game.setPlayer = function (name) {
        var player = new Player_1.Player(name);
        localStorage.setItem('player', JSON.stringify(player));
    };
    return Game;
}());
exports.Game = Game;
