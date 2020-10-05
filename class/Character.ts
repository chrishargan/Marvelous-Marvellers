import {Avatar} from "./Avatar";
import {Stats} from "./Stats";

class Character {
private id : number;
private _name : string;
private _slug : string;
private _stats : Stats;
private _avatar : Avatar;


    constructor(id: number, name: string, slug: string, stats: Stats, avatar : Avatar) {
        this.id = id;
        this._name = name;
        this._slug = slug;
        this._stats = stats;
        this._avatar = avatar;
    }

    public showPrice() : number {
        return (this._stats.intelligence + this._stats.combat + this._stats.durability + this._stats.strength + this._stats.power + this._stats.speed) * 3;
    }

    get name(): string {
        return this._name;
    }

    get slug(): string {
        return this._slug;
    }

    get stats(): Stats {
        return this._stats;
    }

    get avatar(): Avatar {
        return this._avatar;
    }
}

export {Character}