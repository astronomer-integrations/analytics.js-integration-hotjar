var Analytics = require('analytics.js-core').constructor;
var integration = require('analytics.js-integration');
var sandbox = require('clear-env');
var tester = require('analytics.js-integration-tester');
var Hotjar = require('../lib/');

describe('Hotjar', function() {
  var analytics;
  var hotjar;
  var options = {
    events: {
        hjid: '250523',
        hjsv: '5'
    }
  };

  beforeEach(function() {
    analytics = new Analytics();
    hotjar = new Hotjar(options);
    analytics.use(Hotjar);
    analytics.use(tester);
    analytics.add(hotjar);
  });

  afterEach(function() {
    analytics.restore();
    analytics.reset();
    hotjar.reset();
    sandbox();
  });

  it('should have the correct settings', function() {
    analytics.compare(Hotjar, integration('Hotjar')
      .option('hjid')
      .option('hjsv'));
  });

  describe('after loading', function() {
    beforeEach(function(done) {
      analytics.once('ready', done);
      analytics.initialize();
      analytics.page();
    });
  });
});