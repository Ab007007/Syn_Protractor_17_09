var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var AllureReporter = require('jasmine-allure-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html',
  cleanDestination: false,
  showSummary: false,
  showConfiguration: false,
  reportTitle: null
});


exports.config = {
    framework: 'jasmine',
  //  seleniumAddress: 'http://localhost:4444/wd/hub',
  // specs: ['development.js', 'ChainLocators.js'],
  specs: ['development.js'  ],
    capabilities: {
      'browserName': 'chrome'
    }, 

    beforeLaunch: function() {
      return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
      });
    },
  
    // Assign the test reporter to each running instance
    onPrepare: function() {
      jasmine.getEnv().addReporter(reporter);
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }));
      jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });

      var jasmineReporters = require('jasmine-reporters');
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
}));
    },
  
    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
      return new Promise(function(resolve){
        reporter.afterLaunch(resolve.bind(this, exitCode));
      });
    },

    onComplete: function() {
      var browserName, browserVersion;
      var capsPromise = browser.getCapabilities();
  
      capsPromise.then(function (caps) {
         browserName = caps.get('browserName');
         browserVersion = caps.get('version');
         platform = caps.get('platform');
  
         var HTMLReport = require('protractor-html-reporter-2');
  
         testConfig = {
             reportTitle: 'Protractor Test Execution Report',
             outputPath: './',
             outputFilename: 'ProtractorTestReport',
             screenshotPath: './screenshots',
             testBrowser: browserName,
             browserVersion: browserVersion,
             modifiedSuiteName: false,
             screenshotsOnlyOnFailure: true,
             testPlatform: platform
         };
         new HTMLReport().from('xmlresults.xml', testConfig);
     });
  }
  }