import {Config} from 'protractor';

export const config: Config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['tests/spec.js'],
    SELENIUM_PROMISE_MANAGER: false,
    getPageTimeout: 100000,
    capabilities: {
        browserName: 'chrome',
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};