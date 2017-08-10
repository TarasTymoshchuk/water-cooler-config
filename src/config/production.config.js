import angular from 'angular';

angular
  .module('app.core')
  .config(config);

/* @ngInject */
function config(appConfig, $compileProvider, $locationProvider) {
  $compileProvider.debugInfoEnabled(false);

  appConfig.apiUrl = '/api'; // eslint-disable-line no-param-reassign
  appConfig.mobileNumberPrefix = '+380'; // eslint-disable-line no-param-reassign
  appConfig.mobileNumberMask = `${appConfig.mobileNumberPrefix} 99 999 99 99`; // eslint-disable-line no-param-reassign

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
    rewriteLinks: true
  });
}
