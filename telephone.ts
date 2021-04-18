export class Telephone {
    private _telNumber: number;
    private _telType: string;
    constructor(telephoneInput: [number, string]) {
        this._telNumber = telephoneInput[0];
        this._telType = telephoneInput[1];
     }
    
}