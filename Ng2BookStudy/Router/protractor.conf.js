/**
 * Created by khjan on 2017-04-04.
 */
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    /**
     * The timeout in milliseconds for each script run on the browser. This
     * should be longer than the maximum time your application needs to
     * stabilize between tasks.
     */
    allScriptsTimeout: 11000,
    /**
     * Required. Spec patterns are relative to the location of this config.
     *
     * Example:
     * specs: [
     *   'spec/*_spec.js'
     * ]
     */
    specs: [
        './e2e/**/*.e2e-spec.ts'
    ],
    /**
     * Protractor can launch your tests on one or more browsers. If you are
     * testing on a single browser, use the capabilities option. If you are
     * testing on multiple browsers, use the multiCapabilities array.
     *
     * For a list of available capabilities, see
     * https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
     * In addition, you may specify count, shardTestFiles, and maxInstances.
     *
     * Example:
     * capabilities: {
   *   browserName: 'chrome',
   *   name: 'Unnamed Job',
   *   logName: 'Chrome - English',
   *   count: 1,
   *   shardTestFiles: false,
   *   maxInstances: 1,
   *   specs: ['spec/chromeOnlySpec.js'],
   *   exclude: ['spec/doNotRunInChromeSpec.js'],
   *   seleniumAddress: 'http://localhost:4444/wd/hub'
   * }
     */
    capabilities: {
        'browserName': 'chrome'
    },
    /**
     * If true, Protractor will connect directly to the browser Drivers
     * at the locations specified by chromeDriver and firefoxPath. Only Chrome
     * and Firefox are supported for direct connect.
     *
     * default: false
     */
    directConnect: true,
    /**
     * A base URL for your application under test. Calls to protractor.get()
     * with relative paths will be resolved against this URL (via url.resolve)
     */
    baseUrl: 'http://localhost:4200/',
    /**
     * Test framework to use. This may be one of: jasmine, mocha or custom.
     * Default value is 'jasmine'
     *
     * When the framework is set to "custom" you'll need to additionally
     * set frameworkPath with the path relative to the config file or absolute:
     *
     *   framework: 'custom',
     *   frameworkPath: './frameworks/my_custom_jasmine.js',
     *
     * See github.com/angular/protractor/blob/master/lib/frameworks/README.md
     * to comply with the interface details of your custom implementation.
     *
     * Jasmine is fully supported as test and assertion frameworks.
     * Mocha has limited support. You will need to include your
     * own assertion framework (such as Chai) if working with Mocha.
     */
    framework: 'jasmine',
    /**
     * Options to be passed to jasmine.
     *
     * See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
     * for the exact options available.
     */
    jasmineNodeOpts: {
        showColors: true,
        /**
         * Default time to wait in ms before a test fails.
         */
        defaultTimeoutInterval: 30000,
        /**
         * Function called to print jasmine results.
         */
        print: function() {}
    },
    /**
     * A callback function called once configs are read but before any
     * environment setup. This will only run once, and before onPrepare.
     *
     * You can specify a file containing code to run by setting beforeLaunch to
     * the filename string.
     *
     * At this point, global variable 'protractor' object will NOT be set up,
     * and globals from the test framework will NOT be available. The main
     * purpose of this function should be to bring up test dependencies.
     */
    beforeLaunch: function() {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
    },
    /**
     * A callback function called once protractor is ready and available, and
     * before the specs are executed. If multiple capabilities are being run,
     * this will run once per capability.
     *
     * You can specify a file containing code to run by setting onPrepare to
     * the filename string. onPrepare can optionally return a promise, which
     * Protractor will wait for before continuing execution. This can be used if
     * the preparation involves any asynchronous calls, e.g. interacting with
     * the browser. Otherwise Protractor cannot guarantee order of execution
     * and may start the tests before preparation finishes.
     *
     * At this point, global variable 'protractor' object will be set up, and
     * globals from the test framework will be available. For example, if you
     * are using Jasmine, you can add a reporter with:
     *
     *    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
     *      'outputdir/', true, true));
     *
     * If you need access back to the current configuration object,
     * use a pattern like the following:
     *
     *    return browser.getProcessedConfig().then(function(config) {
   *      // config.capabilities is the CURRENT capability being run, if
   *      // you are using multiCapabilities.
   *      console.log('Executing capability', config.capabilities);
   *    });
     */
    onPrepare() {
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
};
