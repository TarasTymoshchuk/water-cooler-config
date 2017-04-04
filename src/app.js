/* globals document */

import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import AngularAnimate from 'angular-animate';
import AngularSanitize from 'angular-sanitize';
import AngularBootstrap from 'angular-ui-bootstrap';

/* eslint-disable */
import LocalStorageModule from 'angular-local-storage';
/* eslint-enable */

import AppCore from './core';
import AppComponent from './app.component';
import GlobalCtrl from './GlobalCtrl.controller';

import components from './components';
import models from './models';

import './assets/scss/layout.scss';

const appName = 'app';

angular.module(appName, [
  AppCore,
  models,
  // framework wide components
  AngularUiRouter,
  AngularAnimate,
  AngularSanitize,
  AngularBootstrap,

  // services
  LocalStorageModule,

  components
])
  .config(config)
  .controller(GlobalCtrl.$name, GlobalCtrl)
  .component(AppComponent.selector, AppComponent);

/* @ngInject */
function config($urlRouterProvider, $httpProvider, localStorageServiceProvider, uibDropdownConfig) {
  localStorageServiceProvider.setPrefix(appName);

  const httpDefaults = $httpProvider.defaults;
  httpDefaults.withCredentials = true;
  httpDefaults.useXDomain = true;

  $urlRouterProvider.otherwise('/');

  uibDropdownConfig.openClass = 'show'; // eslint-disable-line no-param-reassign
}
// window.name = 'NG_DEFER_BOOTSTRAP!';
angular.element(document).ready(() => {
  angular.bootstrap(document, [appName]);
  // angular.resumeBootstrap();
});
