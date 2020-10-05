import {Character} from "./Character";
import {CharacterList} from "./CharacterList";

class Battle {

    private _playerCharacter: Character;
    private opponent: Character;
    private playerCharacterHealth : number = 1000;
    private opponentHealth : number = 1000;

    constructor(playerCharacter: Character, opponent : Character) {
        this._playerCharacter = playerCharacter;
        this.opponent = opponent;
        console.log(this.opponent.name + " VS " + this._playerCharacter.name)
    }

    public setTurnIntervals(playerSpeed : number, opponentSpeed : number){
        let playerTurn = setInterval(() => this.battlePhase(), 1000 - 5 * playerSpeed);
        let opponentTurn = setInterval(() => this.battlePhase(), 1000 - 5 * opponentSpeed)
    }

    public damagePlayer(amount : number){
        this.playerCharacterHealth -= amount;
        if(this.playerCharacterHealth <= 0){
            this.playerLoses();
        }
    }
    public damageOpponent(amount : number){
        this.opponentHealth -= amount;
        if(this.opponentHealth <= 0){
            this.opponentLoses();
        }
    }

    private playerLoses() {

    }

    private opponentLoses() {

    }

    private battlePhase() { //calculate battle
        //return undefined;
    }
}

export {Battle}