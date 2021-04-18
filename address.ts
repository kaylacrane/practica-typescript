export class Address {
    private _street: string;
    private _houseNumber: number;
    private _apartment: number;
    private _letter: string;
    private _postCode: number;
    private _city: string;
    private _province: string;

    constructor(addressInput:[string, number, number, string, number, string, string]) {
        this._street = addressInput[0];
        this._houseNumber = addressInput[1];
        this._apartment = addressInput[2];
        this._letter = addressInput[3];
        this._postCode =  addressInput[4];
        this._city = addressInput[5];
        this._province = addressInput[6];
     }
    
    get street(): string {
        return this._street;
    }
    set street(streetName: string) {
        this._street = streetName;
    }
    get houseNumber(): number {
        return this._houseNumber;
    }
    set houseNumber(streetNumber: number) {
        this._houseNumber = streetNumber;
    }
    get apartment(): number {
        return this._apartment;
    }
    set apartment(apartmentNumber: number) {
        this._apartment = apartmentNumber;
    }
    get letter(): string {
        return this._letter;
    }
    set letter(aptLetter: string) {
        this._letter = aptLetter;
    }
    get postCode(): number {
        return this._postCode;
    }
    set postCode(pc: number) {
        this._postCode = pc;
    }
    get city(): string {
        return this._city;
    }
    set city(cityValue: string) {
        this._city = cityValue;
    }
    get province(): string{
            return this._province; 
    }
    set province(provinceName:string) {
        this._province = provinceName;
    }
}