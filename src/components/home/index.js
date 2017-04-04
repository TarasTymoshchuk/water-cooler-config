import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import AppCore from '../../core';
import HomePageComponent from './homePage.component';

export default angular.module('home', [
  AppCore,
  uiRouter,
  uiBootstrap
])
  .config(config)
  .component(HomePageComponent.$name, HomePageComponent)
  .name;

/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      component: HomePageComponent.$name,
      data: {
        requiresAuth: true
      }
    })
  ;
}
