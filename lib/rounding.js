'use strict';

/**
 * Rounds a number up or down if the value is less than 0 or not
 * @since 1.2.0
 * @param {number} number Number to round
 * @return {number} Returns the rounded number
 */
module.exports = function (number) {
    const isPositive = number >= 0;

    // If we add 0.001 and it is greater than the number rounded up, then we need to round up to fix floating point error
    const rounding = number + 0.001 > Math.ceil(number) ? Math.round : Math.floor;
    const rounded = rounding(Math.abs(number));

    return isPositive ? rounded : -rounded;
};
