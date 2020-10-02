import {Character} from "./Character";

class Player {
    private _name : string;
    private _money : number;
    private _team : Map<string, Character>;
    private _victories : number;
    private _defeats : number;
    private _profileImg : string = "Img/defaultavatar.jpg";


    constructor(name : string, money : number, victories : number, defeats : number, team : Map<string, Character>) {
        console.log(team)
        this._name = name;
        this._money = money;
        this._victories = victories;
        this._defeats = defeats;
        this._team = team;
    }

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
        return "Congratulations! You just bought " + character.name + "!";
    }
}

export {Player}