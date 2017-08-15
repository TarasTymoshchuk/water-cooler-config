import angular from 'angular';

angular
  .module('app.core')
  .config(config);

/* @ngInject */
function config(appConfig, $compileProvider, $locationProvider) {
  $compileProvider.debugInfoEnabled(false);

  appConfig.apiUrl = '/api'; // eslint-disable-line no-param-reassign

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
    rewriteLinks: true
  });
}
