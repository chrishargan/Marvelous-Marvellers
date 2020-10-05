class Avatar {
    private _portrait : string;


    constructor(portrait: string) {
        this._portrait = portrait;
    }


    get portrait(): string {
        return this._portrait;
    }
}

export {Avatar}