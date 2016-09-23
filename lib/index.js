/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose Hotjar integration.
 */

var Hotjar = module.exports = integration('Hotjar')
  .global('hj')
  .global('_hjSettings')
  .option('hjid')
  .option('hjsv')

/**
 * Initialize.
 *
 * @api public
 */

Hotjar.prototype.initialize = function() {
  this.ready();
};

/**
 * Page.
 *
 * @api public
 */

Hotjar.prototype.page = function (page) {
  var hjid = this.options.hjid;
  var hjsv = this.options.hjsv;
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:hjid,hjsv:hjsv};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
};