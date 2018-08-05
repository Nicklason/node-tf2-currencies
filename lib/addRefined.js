'use strict';

const toScrap = require('./toScrap');
const toRefined = require('./toRefined');

/**
 * Adds refined together
 * @since 1.2.0
 * @param {*} args Refined to add together
 * @return {number} Returns all the refined added together
 * @example Currencies.addRefined(10.11, 20.05, 0.11)
 */
module.exports = function (...args) {
    let value = 0;

    for (let i = 0; i < args.length; i++) {
        const refined = args[i];
        value += toScrap(refined);
    }

    const metal = toRefined(value);
    return metal;
};
