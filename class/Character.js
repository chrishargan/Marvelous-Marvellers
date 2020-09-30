"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
var Stats = /** @class */ (function () {
    function Stats() {
    }
    return Stats;
}());
var Character = /** @class */ (function () {
    function Character(id, name, stats, avatar) {
        this.id = id;
        this._name = name;
        this.stats = stats;
        this.avatar = avatar;
    }
    Object.defineProperty(Character.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Character;
}());
exports.Character = Character;
