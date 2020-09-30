"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(id, name, slug, stats, avatar) {
        this.id = id;
        this._name = name;
        this._slug = slug;
        this._stats = stats;
        this.avatar = avatar;
    }
    showPrice() {
        return (this._stats.intelligence + this._stats.combat + this._stats.durability + this._stats.strength + this._stats.power + this._stats.speed) * 3;
    }
    get name() {
        return this._name;
    }
    get slug() {
        return this._slug;
    }
    get stats() {
        return this._stats;
    }
}
exports.Character = Character;
