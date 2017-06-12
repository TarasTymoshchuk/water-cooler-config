import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import AppCore from '../../core';
import AdminConfigComponent from './config.component';

export default angular.module('config', [
  AppCore,
  uiRouter,
  uiBootstrap
])
  .config(config)
  .component(AdminConfigComponent.$name, AdminConfigComponent)
  .name;

/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state('config', {
      url: '/admin/config',
      component: AdminConfigComponent.$name
    });
}
