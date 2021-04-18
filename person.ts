import { Address } from "./address";
import { Email } from "./email";
import { Telephone } from "./telephone";

//We use an enum to define a set selection of answers for gender 
enum Gender {male = "MALE", female = "FEMALE", other = "OTHER"}

//this interface is used to define structure of input when Person instance is created
//age is not included since it is calculated using the birthday data
export interface PersonInterface {
    name: string,
    surname: string;
    dni: string;
    birthday: string;
    favoriteColor: string;
    gender: string;
    address: [string, number, number, string, number, string, string];
    email:[string, string];
    telephone: [number , string];
    note: string;
}

export class Person  {
    private _name: string;
    private _surname: string;
    private _age: number;
    private _dni: string;
    private _birthday: Date;
    private _favoriteColor: string;
    private _gender: Gender;
    private _addresses: Address[];
    private _emails: Email[];
    private _telephones: Telephone[];
    private _notes: string[];
    
    constructor(personData: PersonInterface) {
        this._name = personData.name;
        this._surname = personData.surname;
        this._age = this.calculateAge(personData.birthday);
        this._dni = personData.dni;
        this._birthday = new Date(personData.birthday);
        this._favoriteColor = personData.favoriteColor;
        this._gender = Gender[personData.gender as keyof typeof Gender];
        this._addresses =[new Address([...personData.address])];
        this._emails = [new Email([...personData.email])];
        this._telephones = [new Telephone([...personData.telephone])];
        this._notes = [personData.note];
        }

    get name(): string {
        return this._name;
    }
    get surname(): string {
        return this._surname;
    }
    get dni(): string {
        return this._dni;
    }
    get gender(): Gender  {
       return this._gender;
   }
   set gender(g: Gender) {
       this._gender = g;
   }
    get birthday(): Date {
        return this._birthday;
    }
    set birthday(dateOfBirth: Date) {
        this._birthday = dateOfBirth;
    }
    get age(): number{
        return this._age;
   }
   get favoriteColor(): string   {
       return this._favoriteColor;
    }
    set favoriteColor(color:string) {
        this._favoriteColor = color;
    }
     get addresses(): Address[] {
         return this._addresses;
    }
    get emails(): Email[]{
        return [...this._emails];
    }
    get telephones(): Telephone[] {
        return this._telephones;
    }
    get notes(): string[] {
        return this._notes;
    }
    
    //this method calculates age using birthday data upon creation of Person instance
    calculateAge(birthdayString: string): number {
        let birthday = new Date(birthdayString);
        let now = new Date();
        let current_year = now.getFullYear();
        let difference = current_year - birthday.getFullYear();
        return difference;  
    }

    //the below four methods allow us to add extra data after instance creation
    addAddress(addressInput: [string, number, number, string, number, string, string]) {
        let newAddress = new Address(addressInput);
        this._addresses?.push(newAddress);
    }
    addEmail(emailInput: [string, string]) {
        let newEmail = new Email(emailInput);
        this._emails?.push(newEmail);
    }
    addTelephone(telephoneInput: [number, string]) {
        let newPhone = new Telephone(telephoneInput);
        this._telephones .push(newPhone);
    }
    addNote(newNote: string) {
        this._notes?.push(newNote);
    }

}
