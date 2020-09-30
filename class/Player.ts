import {Character} from "./Character";

class Player {
    private name : string;
    private money : number;
    private team : Array<Character> = [];
    private victories : number;
    private defeats : number;
    private _profileImg : string = "Img/defaultavatar.jpg";


    constructor(name : string) {
        this.name = name;
        this.money = 1000;
        this.victories = 0;
        this.defeats = 0;
    }

    get profileImg(): string {
        return this._profileImg;
    }
}

export {Player}