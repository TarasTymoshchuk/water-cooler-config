import angular from 'angular';

angular
  .module('app.core')
  .config(config)
;

/* @ngInject */
function config(appConfig, $compileProvider) {
  $compileProvider.debugInfoEnabled(true);

  appConfig.apiUrl = '/api'; // eslint-disable-line no-param-reassign
}