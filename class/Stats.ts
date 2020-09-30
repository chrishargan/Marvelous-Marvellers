class Stats {
    private intelligence : number;
    private strength : number;
    private speed : number;
    private durability : number;
    private power : number;
    private combat : number;


    constructor(intelligence: number, strength: number, speed: number, durability: number, power: number, combat: number) {
        this.intelligence = intelligence;
        this.strength = strength;
        this.speed = speed;
        this.durability = durability;
        this.power = power;
        this.combat = combat;
    }
}

export {Stats}