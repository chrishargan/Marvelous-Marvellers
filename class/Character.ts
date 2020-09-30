import {Avatar} from "./Avatar";

class Stats {
}

class Character {
private id : number;
private _name : string;
private stats : Stats;
private avatar : Avatar;


    constructor(id: number, name: string, stats: Stats, avatar : Avatar) {
        this.id = id;
        this._name = name;
        this.stats = stats;
        this.avatar = avatar;
    }


    get name(): string {
        return this._name;
    }
}

export {Character}