'use strict';

const pluralize = require('pluralize');

const toScrap = require('./toScrap');
const toRefined = require('./toRefined');
const truncate = require('./truncate');

/**
 * Creates a new Currencies instance
 * @class
 * @param {object} currencies The currencies object
 * @throws Will throw an error if missing currencies object, or if it is not valid
 */
function Currencies (currencies) {
    if (!currencies) {
        throw new Error('Missing currencies object');
    }

    this.keys = parseInt(currencies.keys);
    this.metal = parseFloat(currencies.metal);

    if (isNaN(this.keys) || isNaN(this.metal)) {
        throw new Error('Not a valid currencies object');
    }

    this.metal = toRefined(toScrap(this.metal));
}

/**
 * Get the value of the currencies in scrap
 * @param {number} conversion The refined value of keys
 * @return {number} The value of the this currencies instance
 * @throws Will throw an error if missing key conversion rate and there are keys
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

/**
 * Creates a string that represents this currencies object
 * @return {string} Example: 1 key, 20.11 ref
 */
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
