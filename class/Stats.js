"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stats = void 0;
class Stats {
    constructor(intelligence, strength, speed, durability, power, combat) {
        this._intelligence = intelligence;
        this._strength = strength;
        this._speed = speed;
        this._durability = durability;
        this._power = power;
        this._combat = combat;
    }
    get intelligence() {
        return this._intelligence;
    }
    get strength() {
        return this._strength;
    }
    get speed() {
        return this._speed;
    }
    get durability() {
        return this._durability;
    }
    get power() {
        return this._power;
    }
    get combat() {
        return this._combat;
    }
}
exports.Stats = Stats;
