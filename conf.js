exports.config = {
  framework: 'jasmine',
  baseUrl: 'http://localhost:8080',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {'browserName': 'chrome'},
  rootElement: 'html',
  specs: ['src/components/fileManagerPage/elfinder.spec.js']
};