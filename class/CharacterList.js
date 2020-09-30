"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterList = void 0;
var CharacterList = /** @class */ (function () {
    function CharacterList() {
        this.map = new Map();
    }
    CharacterList.prototype.add = function (hero) {
        this.map.set(hero.name, hero);
    };
    CharacterList.prototype.search = function (name) {
        if (this.map.has(name)) {
            return this.map.get(name);
        }
        else
            return null;
    };
    return CharacterList;
}());
exports.CharacterList = CharacterList;
