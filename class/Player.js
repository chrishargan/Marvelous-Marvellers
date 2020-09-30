"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name) {
        this.team = [];
        this._profileImg = "Img/defaultavatar.jpg";
        this.name = name;
        this.money = 1000;
        this.victories = 0;
        this.defeats = 0;
    }
    Object.defineProperty(Player.prototype, "profileImg", {
        get: function () {
            return this._profileImg;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
exports.Player = Player;
