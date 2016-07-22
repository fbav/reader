'use strict'
let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;

import Utils from '../src/js/Utils';

describe('Utils and helpers', () => {
	beforeEach(function () {
		//this.utils = new Utils();
	});

	describe('Return whether a number is prime', () => {

		it("Should return true if a number is a prime number", function () {
			let result = true;
			assert.equal(Utils.isPrimeNumber(2), result);
			assert.equal(Utils.isPrimeNumber(3), result);
			assert.equal(Utils.isPrimeNumber(5), result);
			assert.equal(Utils.isPrimeNumber(7), result);
			assert.equal(Utils.isPrimeNumber(349), result);
			assert.equal(Utils.isPrimeNumber(997), result);
		});
		
		it("Should return false if a number is not a prime number", function () {
			let result = false;
			assert.equal(Utils.isPrimeNumber(15), result);
			assert.equal(Utils.isPrimeNumber(1500), result);
		});

	});

});