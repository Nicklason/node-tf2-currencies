'use strict';

const currencies = require('./lib/currencies');

/**
 * Register extra components
 * @param {Array.<String>} components Components to require
 */
function register (components) {
    components.forEach(function (component) {
        currencies[component] = require('./lib/' + component);
    });
};

register([
    'toScrap',
    'toRefined',
    'toCurrencies'
]);

module.exports = currencies;
