import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import AppCore from '../../core';
import DashboardComponent from './dashboard.component';

export default angular.module('dashboard', [
  AppCore,
  uiRouter,
  uiBootstrap
])
  .config(config)
  .component(DashboardComponent.$name, DashboardComponent)
  .name;

/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      component: DashboardComponent.$name
    });
}
