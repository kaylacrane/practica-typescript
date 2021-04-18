"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(addressInput) {
        this._street = addressInput[0];
        this._houseNumber = addressInput[1];
        this._apartment = addressInput[2];
        this._letter = addressInput[3];
        this._postCode = addressInput[4];
        this._city = addressInput[5];
        this._province = addressInput[6];
    }
    Object.defineProperty(Address.prototype, "street", {
        get: function () {
            return this._street;
        },
        set: function (streetName) {
            this._street = streetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "houseNumber", {
        get: function () {
            return this._houseNumber;
        },
        set: function (streetNumber) {
            this._houseNumber = streetNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "apartment", {
        get: function () {
            return this._apartment;
        },
        set: function (apartmentNumber) {
            this._apartment = apartmentNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "letter", {
        get: function () {
            return this._letter;
        },
        set: function (aptLetter) {
            this._letter = aptLetter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "postCode", {
        get: function () {
            return this._postCode;
        },
        set: function (pc) {
            this._postCode = pc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (cityValue) {
            this._city = cityValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "province", {
        get: function () {
            return this._province;
        },
        set: function (provinceName) {
            this._province = provinceName;
        },
        enumerable: false,
        configurable: true
    });
    return Address;
}());
exports.Address = Address;
