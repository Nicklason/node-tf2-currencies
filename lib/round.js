'use strict';

/**
 * Rounds a number to the closest step
 * @param {number} number Number to round
 * @param {number} [step=1] Closest step to round to
 * @return {number} Returns the rounded number
 */
module.exports = function (number, step) {
    if (step === undefined) {
        // If no step was set, then use the default
        step = 0.5;
    }

    const inv = 1.0 / step;

    const rounded = Math.round(number * inv) / inv;
    return rounded;
};
