'use strict';

const rounding = require('./rounding');

/**
 * Truncate a number
 * @since 1.0.0
 * @param {number} number Number to truncate
 * @param {number} decimals Amount of decimal places to keep
 * @return {number} Returns the truncated number
 */
module.exports = function (number) {
    const decimals = 2;
    // Get the factor to truncate by
    const factor = Math.pow(10, decimals);
    // Always round the number by aiming at 0
    const truncated = rounding(number * factor) / factor;
    return truncated;
};
