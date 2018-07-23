'use strict';

/**
 * Converts scrap into a currencies object
 * @param {number} value Value in scrap
 * @param {number} conversion The refined value of keys
 * @return {Object} Returns a new instance of Currencies
 */
module.exports = function (value, conversion) {
    if (conversion === undefined) {
        throw new Error('Missing conversion rate for keys in refined');
    }

    // Convert conversion rate into scrap
    conversion = this.toScrap(conversion);

    // Get the highest amount of keys from the given value
    const keys = Math.floor(value / conversion);
    // Find the value that is remaining
    const left = value - keys * conversion;
    // Convert the missing value to refined
    const metal = this.toRefined(left);

    // Create new instance of Currencies
    const currencies = new this({ keys, metal });

    return currencies;
};
