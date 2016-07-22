'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, null, [{
		key: 'isPrimeNumber',
		value: function isPrimeNumber(num) {
			for (var i = 2; i < num; i++) {
				if (num % i === 0) {
					return false;
				}
			}
			return num > 1;
		}
	}]);

	return Utils;
}();

//allows modules to run in the browser without having to use Browserfy


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = Utils;else window.Utils = Utils;