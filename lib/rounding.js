'use strict';

/**
 * Rounds a number up or down if the value is less than 0 or not
 * @param {number} number Number to round
 * @return {number} Returns the rounded number
 */
module.exports = function (number) {
    const rounding = number < 0 ? Math.ceil : Math.floor;
    const rounded = rounding(number);
    return rounded;
};
