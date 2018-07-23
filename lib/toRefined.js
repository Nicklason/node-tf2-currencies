'use strict';

const truncate = require('./truncate');

/**
 * Coverts scrap to refined
 * @param {*} scrap Scrap to convert
 * @return {number} Returns the value of refined
 */
module.exports = function (scrap) {
    // The converstion rate between scrap and refined is 9 scrap/ref
    let refined = scrap / 9;
    // Truncate it to remove repeating decimals  (10 scrap / 9 scrap/refined = 1.1111...)
    refined = truncate(refined, 2);
    return refined;
};
