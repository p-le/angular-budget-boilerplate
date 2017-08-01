exports.config = {
    specs: [
        'src/**/*.e2e.spec.js'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:9000',
    rootElement: 'body',
    framework: 'jasmine'
};