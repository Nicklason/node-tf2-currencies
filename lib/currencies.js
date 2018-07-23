'use strict';

const pluralize = require('pluralize');

const toScrap = require('./toScrap');
const truncate = require('./truncate');

/**
 * Creates a new Currencies instance
 * @class
 * @param {object} currencies The currencies object
 */
function Currencies (currencies) {
    this.keys = currencies.keys;
    this.metal = currencies.metal;
}

/**
 * Get the value of the currencies in scrap
 * @param {number} conversion The refined value of keys
 * @return {number} The value of the this currencies instance
 */
Currencies.prototype.toValue = function (conversion) {
    if (conversion === undefined && this.keys != 0) {
        // The conversion rate is needed because there are keys
        throw new Error('Missing conversion rate for keys in refined');
    }

    let value = toScrap(this.metal);
    if (this.keys != 0) {
        value += this.keys * toScrap(conversion);
    }
    return value;
};

Currencies.prototype.toString = function () {
    let string = '';

    if (this.keys != 0) {
        // If there are keys, then we will add that to the string
        string = pluralize('key', this.keys, true);
    }

    if (this.metal != 0) {
        if (string != '') {
            // The string is not empty, that means that we have added the keys
            string += ', ';
        }

        // Add the metal to the string
        string += truncate(this.metal) + ' ref';
    }

    return string;
};

module.exports = Currencies;
