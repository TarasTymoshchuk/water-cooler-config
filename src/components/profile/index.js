import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import AppCore from '../../core';
import ProfileComponent from './profile.component';

export default angular.module('profile', [
  AppCore,
  uiRouter,
  uiBootstrap
])
  .config(config)
  .component(ProfileComponent.$name, ProfileComponent)
  .name;

/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state('profile', {
      url: '/config/profile',
      component: ProfileComponent.$name
    });
}
