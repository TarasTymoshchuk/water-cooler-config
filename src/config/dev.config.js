import angular from 'angular';

// TODO - make app name a nodejs ENV variable
angular
  .module('app.core')
  .run($trace => $trace.enable(1))
  .config(config)
;

/* @ngInject */
function config(appConfig) {
  appConfig.apiUrl = '/api'; // eslint-disable-line no-param-reassign
}