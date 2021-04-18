"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var address_1 = require("./address");
var email_1 = require("./email");
var telephone_1 = require("./telephone");
//We use an enum to define a set selection of answers for gender 
var Gender;
(function (Gender) {
    Gender["male"] = "MALE";
    Gender["female"] = "FEMALE";
    Gender["other"] = "OTHER";
})(Gender || (Gender = {}));
var Person = /** @class */ (function () {
    function Person(personData) {
        this._name = personData.name;
        this._surname = personData.surname;
        this._age = this.calculateAge(personData.birthday);
        this._dni = personData.dni;
        this._birthday = new Date(personData.birthday);
        this._favoriteColor = personData.favoriteColor;
        this._gender = Gender[personData.gender];
        this._addresses = [new address_1.Address(__spreadArray([], personData.address))];
        this._emails = [new email_1.Email(__spreadArray([], personData.email))];
        this._telephones = [new telephone_1.Telephone(__spreadArray([], personData.telephone))];
        this._notes = [personData.note];
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (g) {
            this._gender = g;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (dateOfBirth) {
            this._birthday = dateOfBirth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "favoriteColor", {
        get: function () {
            return this._favoriteColor;
        },
        set: function (color) {
            this._favoriteColor = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "addresses", {
        get: function () {
            return this._addresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "emails", {
        get: function () {
            return __spreadArray([], this._emails);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "telephones", {
        get: function () {
            return this._telephones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        enumerable: false,
        configurable: true
    });
    //this method calculates age using birthday data upon creation of Person instance
    Person.prototype.calculateAge = function (birthdayString) {
        var birthday = new Date(birthdayString);
        var now = new Date();
        var current_year = now.getFullYear();
        var difference = current_year - birthday.getFullYear();
        return difference;
    };
    //the below four methods allow us to add extra data after instance creation
    Person.prototype.addAddress = function (addressInput) {
        var _a;
        var newAddress = new address_1.Address(addressInput);
        (_a = this._addresses) === null || _a === void 0 ? void 0 : _a.push(newAddress);
    };
    Person.prototype.addEmail = function (emailInput) {
        var _a;
        var newEmail = new email_1.Email(emailInput);
        (_a = this._emails) === null || _a === void 0 ? void 0 : _a.push(newEmail);
    };
    Person.prototype.addTelephone = function (telephoneInput) {
        var newPhone = new telephone_1.Telephone(telephoneInput);
        this._telephones.push(newPhone);
    };
    Person.prototype.addNote = function (newNote) {
        var _a;
        (_a = this._notes) === null || _a === void 0 ? void 0 : _a.push(newNote);
    };
    return Person;
}());
exports.Person = Person;
