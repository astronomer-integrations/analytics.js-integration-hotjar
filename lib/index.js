/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose Hotjar integration.
 */

var Hotjar = module.exports = integration('Hotjar')
  .assumesPageview()
  .global('hj')
  .global('_hjSettings')
  .option('hjid')
  .option('hjsv')
  .tag('<script src = "//static.hotjar.com/c/hotjar-{{ hjid }}.js?sv={{ hjsv }}">');

/**
 * Initialize.
 *
 * @api public
 */

Hotjar.prototype.initialize = function() {
  window.hj = window.hj || [];
  window._hjSettings = { hjid: this.options.hjid, hjsv: this.options.hjsv };
  this.load(this.ready);
};

/**
 * Loaded.
 *
 * @api private
 * @return {boolean}
 */

Hotjar.prototype.loaded = function () {
    return !!(window.hj && window._hjSettings);
}