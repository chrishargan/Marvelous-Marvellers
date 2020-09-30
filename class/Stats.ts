class Stats {
    private _intelligence : number;
    private _strength : number;
    private _speed : number;
    private _durability : number;
    private _power : number;
    private _combat : number;


    constructor(intelligence: number, strength: number, speed: number, durability: number, power: number, combat: number) {
        this._intelligence = intelligence;
        this._strength = strength;
        this._speed = speed;
        this._durability = durability;
        this._power = power;
        this._combat = combat;
    }


    get intelligence(): number {
        return this._intelligence;
    }

    get strength(): number {
        return this._strength;
    }

    get speed(): number {
        return this._speed;
    }

    get durability(): number {
        return this._durability;
    }

    get power(): number {
        return this._power;
    }

    get combat(): number {
        return this._combat;
    }
}

export {Stats}