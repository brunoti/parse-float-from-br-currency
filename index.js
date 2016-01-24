/**
* @name    parseFloatFromBrCurrency
* @version v1.0.0 | 2016-01-23 13:26:41
* @author  Bruno Oliveira <bruno.oliveirati1@gmail.com>
* @license MIT
*/
function parseFloatFromBrCurrency(cash) {
    return parseFloat(cash.trim().replace('R$ ', '').replace('R$', '').replace('.', '').replace(',', '.'));
}

if(typeof define === 'function' && define.amd) {
  define(function() { return parseFloatFromBrCurrency;  });
} else if(typeof module !== 'undefined' && module.exports) {
  module.exports = parseFloatFromBrCurrency;
} else {
  exports.parseFloatFromBrCurrency = parseFloatFromBrCurrency;
}
