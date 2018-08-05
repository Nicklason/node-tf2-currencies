'use strict';

const round = require('./round');

/**
 * Coverts refined to scrap
 * @since 1.0.0
 * @param {number} refined Refined to convert
 * @return {number} Returns the value of scrap
 */
module.exports = function (refined) {
    // Get the estimated amount of scrap
    let scrap = refined * 9;
    // Round it to the nearest half
    scrap = round(scrap, 0.5);
    return scrap;
};
