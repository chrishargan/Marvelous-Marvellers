import {Character} from "./Character";

class CharacterList {
    //private map : {string , Character};
    private map : Map<string, Character>;
    private arrayBySlugs : Array<string> = [];

    constructor() {
        this.map = new Map();
    }
    public add(hero : Character) : void {
        this.map.set(hero.slug, hero);
        this.arrayBySlugs.push(hero.slug);
    }
    public search(name : string) : Character | undefined | null {
        if(this.map.has(name)){
            return this.map.get(name)
        } else return null
    }

    public returnRandomCharacter(): Character {
        let randomIndex = Math.floor(Math.random() * this.arrayBySlugs.length);
        let randomSlug = this.arrayBySlugs[randomIndex];
        return <Character>this.search(randomSlug);

    }
}

export {CharacterList}