"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name) {
        this.team = [];
        this._profileImg = "Img/defaultavatar.jpg";
        this.name = name;
        this.money = 1000;
        this.victories = 0;
        this.defeats = 0;
    }
    get profileImg() {
        return this._profileImg;
    }
    addMoney(amount) {
        this.money += amount;
        return this.money;
    }
}
exports.Player = Player;
