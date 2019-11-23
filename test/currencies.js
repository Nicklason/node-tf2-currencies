'use strict';

/* eslint no-undef: 0 */

const Currencies = require('../');
const assert = require('assert');

describe('Object', function () {
    describe('Instantiate', function () {
        it('should not throw with with valid currencies object', function () {
            assert.doesNotThrow(function () {
                new Currencies({ keys: 1, metal: 2.11 });
            });
        });
        it('should throw if missing currencies object', function () {
            assert.throws(function () {
                new Currencies();
            });
        });
    });

    describe('#toString()', function () {
        it('should return "1 key, 2.11 ref"', function () {
            const currencies = new Currencies({ keys: 1, metal: 2.11 });
            assert.equal(currencies.toString(), '1 key, 2.11 ref');
        });
        it('should return "2 keys"', function () {
            const currencies = new Currencies({ keys: 2, metal: 0 });
            assert.equal(currencies.toString(), '2 keys');
        });
        it('should return "0.16 ref"', function () {
            const currencies = new Currencies({ keys: 0, metal: 0.16 });
            assert.equal(currencies.toString(), '0.16 ref');
        });
        it('should not be affected by floating point errors', function () {
            const currencies = new Currencies({ keys: 0, metal: 4.77 });
            assert.equal(currencies.toString(), '4.77 ref');
        });
    });

    describe('#toValue()', function () {
        it('should return 0.5', function () {
            const currencies = new Currencies({ keys: 0, metal: 0.05 });
            assert.strictEqual(currencies.toValue(), 0.5);
        });
        it('should return 297', function () {
            const currencies = new Currencies({ keys: 1, metal: 0 });
            assert.strictEqual(currencies.toValue(33), 297);
        });
        it('should throw if missing convertion rate with keys', function () {
            const currencies = new Currencies({ keys: 1, metal: 0 });
            assert.throws(function () {
                currencies.toValue();
            });
        });
        it('should return be able to handle negative values', function () {
            const currencies = new Currencies({ keys: -1, metal: -1 });
            assert.strictEqual(currencies.toValue(33), -306);
        });
    });

    describe('#toJSON()', function () {
        it('should be the same object', function () {
            const json = { keys: 1, metal: 1 };
            const currencies = new Currencies(json);
            assert.deepStrictEqual(currencies.toJSON(), json);
        });
    });
});

describe('Class', function () {
    describe('#toCurrencies', function () {
        it('should be a copy of the instance', function () {
            const currencies = new Currencies({ keys: 1, metal: 0 });
            const value = currencies.toValue(33);
            const currencies2 = Currencies.toCurrencies(value, 33);
            assert.deepEqual(currencies2, currencies);
        });
        it('should work with negative values', function () {
            const currencies = new Currencies({ keys: -1, metal: -1 });
            const value = currencies.toValue(33);
            const currencies2 = Currencies.toCurrencies(value, 33);
            assert.deepEqual(currencies2, currencies);
        });
    });

    describe('#toScrap', function () {
        it('should return 0.5', function () {
            assert.strictEqual(Currencies.toScrap(0.05), 0.5);
        });
    });

    describe('#toRefined', function () {
        it('should return 0.05', function () {
            assert.strictEqual(Currencies.toRefined(0.5), 0.05);
        });
    });
});
