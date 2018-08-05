'use strict';

/**
 * Rounds a number to the closest step
 * @since 1.0.0
 * @param {number} number Number to round
 * @param {number} [step=1] Closest step to round to
 * @return {number} Returns the rounded number
 */
module.exports = function (number) {
    const step = 0.5;
    const inv = 1.0 / step;

    const rounded = Math.round(number * inv) / inv;
    return rounded;
};
