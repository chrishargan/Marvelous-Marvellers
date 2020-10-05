import {Character} from "./Character";
import {Page} from "./Page";
import {Game} from "./Game";
import {Stats} from "./Stats";
import {Avatar} from "./Avatar";

class Player {
    private _name : string;
    private _money : number;
    private _team : Map<string, Character>;
    private _mapToArray : any;
    private _victories : number;
    private _defeats : number;
    private _profileImg : string = "Img/defaultavatar.jpg";
    private _chosenCharacter : Character | undefined;

    constructor(name : string, money : number, victories : number, defeats : number) { //, team : Map<string, Character>
        //console.log(team)
        this._name = name;
        this._money = money;
        this._victories = victories;
        this._defeats = defeats;
        this._team = new Map<string, Character>();
    }

    /*public setTeamMap(team : Map<string,Character>){
        if(team.size > 0){
            team.forEach((character : Character, slug : string) => {

                let avatar = new Avatar(character.avatar.portrait);
                let characterToAdd = new Character(character.id, character.name, character.slug, stats, avatar) //id: number, name: string, slug: string, stats: Stats, avatar : Avatar
                this._team.set(slug, character)
            })
        }
        console.log(this.team)
    }*/

    get name(): string {
        return this._name;
    }

    get money(): number {
        return this._money;
    }

    get victories(): number {
        return this._victories;
    }

    get defeats(): number {
        return this._defeats;
    }

    get profileImg(): string {
        return this._profileImg;
    }

    get team(): Map<string, Character> {
        return this._team;
    }

    get chosenCharacter(): Character | undefined {
        return this._chosenCharacter;
    }

    set chosenCharacter(value: Character | undefined) {
        this._chosenCharacter = value;
    }

    public addMoney(amount: number): number{
        this._money += amount;
        return this._money;
    }
    public substractMoney(amount: number): number{
        this._money -= amount;
        return this._money;
    }
    public addToTeam(character: Character) : void {
        this.team.set(character.slug, character);
    }
    public handleBuying(character: Character) : string {
        if(this.team.has(character.slug)) return "You already have this character in your team!";
        if(character.showPrice() > this.money) return "You don't have enough money to buy this character!";
        this.addToTeam(character);
        this.substractMoney(character.showPrice());
        Game.player = this;
        Page.showPlayerInfo(this);
        return "Congratulations! You just bought " + character.name + "!";
    }

    public convertMapToArray(){
        this._mapToArray = JSON.stringify(Array.from(this._team.entries()));
        console.log(this._mapToArray)
    }
}

export {Player}