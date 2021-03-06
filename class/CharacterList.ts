import {Character} from "./Character";

class CharacterList {
    //private map : {string , Character};
    private map : Map<string, Character>

    constructor() {
        this.map = new Map();
    }
    public add(hero : Character) : void {
        this.map.set(hero.slug, hero);
    }
    public search(name : string) : Character | undefined | null {
        if(this.map.has(name)){
            return this.map.get(name)
        } else return null
    }
}

export {CharacterList}