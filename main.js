"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
//array in which we will store the Person instances
var contacts = [];
//this function adds any number of Person instances to the contacts array 
function addContacts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < arguments.length; i++) {
        contacts.push(args[i]);
    }
}
//this functions prints contacts list one person at a time
function printContacts() {
    for (var i = 0; i < contacts.length; i++) {
        console.log(contacts[i]);
    }
    console.log("-----------------End of Contacts List-----------------");
}
//we use the PersonInterface to check that each person's data 
//is provided in the correct format
var Diego = {
    name: "Diego",
    surname: "García",
    dni: "12584697Y",
    birthday: "1984-02-03",
    favoriteColor: "green",
    gender: "male",
    address: ["Calle Mayor", 3, 5, "B", 40015, "Madrid", "Madrid"],
    email: ["dgarcia007@gmail.com", "home"],
    telephone: [765003767, "mobile"],
    note: "Diego is an avid gardener"
};
var person1 = new person_1.Person(Diego);
var Violeta = {
    name: "Violeta",
    surname: "Parra",
    dni: "67493671Z",
    birthday: "1960-12-13",
    favoriteColor: "purple",
    gender: "female",
    address: ["Calle Marbella", 45, 1, "", 28150, "Las Palmas", "Gran Canaria"],
    email: ["vparra@thecompany.com", "work"],
    telephone: [917003767, "personal"],
    note: "Violeta has 12 cats"
};
var person2 = new person_1.Person(Violeta);
var Jackie = {
    name: "Jackie",
    surname: "Jones",
    dni: "32088676T",
    birthday: "1992-10-30",
    favoriteColor: "yellow",
    gender: "other",
    address: ["Rue de la Pomme", 23, 4, "D", 50322, "Paris", "Île-de-France"],
    email: ["jackiej@gmail.fr", "personal"],
    telephone: [340444562, "mobile"],
    note: "Jackie is a dance instructor"
};
var person3 = new person_1.Person(Jackie);
addContacts(person1, person2, person3);
printContacts();
//this function searches within the contacts array for a Person with a specified dni 
//and returns the index of that Person
//the returned index is used in the addData function 
function findPersonByDni(searchDni) {
    var index = -1;
    for (var i = 0; i < contacts.length; i++) {
        var dni = contacts[i].dni;
        if (dni === searchDni) {
            index = i;
        }
    }
    return index;
}
//this function can be used to add any type of data for a person in the contacts list.
function addData(dni, dataType, newValue) {
    var personIndex = findPersonByDni(dni);
    var personData = contacts[personIndex];
    var methodName = "add" + (dataType.charAt(0).toUpperCase() + dataType.slice(1).toLowerCase());
    //Here there is an issue with the type of index signature and I don't know how to fix it,
    //but I've add a check to be sure that only valid method names are accepted.
    //Compiling tsc -t es5 does not produce this error
    if (personIndex !== -1 && (typeof personData[methodName] === "function")) {
        personData[methodName](newValue);
    }
    else {
        console.log("Person not in list or type of data cannot be modified");
    }
}
addData("32088676T", "address", ["Avenida América", 124, 10, "E", 52014, "Valencia", "Valencia"]);
addData("32088676T", "email", ["jjones@myworkmail.edu", "work"]);
addData("32088676T", "telephone", [650015548, "work"]);
addData("32088676T", "note", "Jackie has visited 35 countries");
printContacts();
