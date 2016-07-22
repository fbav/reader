class Utils {
	
	static isPrimeNumber(num) {
		for (var i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return num > 1;
	}

}

//allows modules to run in the browser without having to use Browserfy
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	module.exports = Utils;
else
	window.Utils = Utils;