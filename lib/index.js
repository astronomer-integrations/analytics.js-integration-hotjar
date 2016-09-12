/**
 * Module dependencies.
 */

var integration = require('analytics.js-integration');

/**
 * Expose Hotjar integration.
 */

var Hotjar = module.exports = integration('Hotjar')
  .global('hotjar')
  .option('hjid')
  .option('hjsv')
  .tag('<script src = "//static.hotjar.com/c/hotjar-{{hjid}}.js?sv={{hjsv}}">');

/**
 * Initialize.
 *
 * @api public
 */

Hotjar.prototype.initialize = function() {
//   window.hotjar = window.hotjar || {};
//   window.hotjar.hjid = this.options.hjid;
//   window.hotjar.hjsv = this.options.hjid;
  this.load({ hjid: this.options.hjid, hjsv: this.options.hjsv }, this.ready);
};

/**
 * Loaded.
 *
 * @api private
 * @return {boolean}
 */

Hotjar.prototype.loaded = function () {
    return !!window.hotjar;
}