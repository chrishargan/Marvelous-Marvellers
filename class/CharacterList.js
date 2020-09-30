"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterList = void 0;
class CharacterList {
    constructor() {
        this.map = new Map();
    }
    add(hero) {
        this.map.set(hero.slug, hero);
    }
    search(name) {
        if (this.map.has(name)) {
            return this.map.get(name);
        }
        else
            return null;
    }
}
exports.CharacterList = CharacterList;
