import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import uiMask from 'angular-ui-mask';
import AppCore from '../../core';
import ConfigsComponent from './configs.component';
import './configsPage.scss';

export default angular.module('configs', [
  AppCore,
  uiRouter,
  uiMask,
  uiBootstrap
])
  .config(config)
  .component(ConfigsComponent.$name, ConfigsComponent)
  .name;

/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state('configs', {
      url: '/configs',
      component: ConfigsComponent.$name
    });
}
