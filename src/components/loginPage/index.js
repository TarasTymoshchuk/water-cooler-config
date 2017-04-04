import angular from 'angular';
import uiRouter from 'angular-ui-router';
import satellizer from 'satellizer';
import AppCore from '../../core';
import LoginPageComponent from './loginPage.component';
import LogoutComponent from './logout.component';

export { LoginPageComponent, LogoutComponent };

export default angular.module('loginPage', [
  AppCore,
  uiRouter,
  satellizer
])
  .config(config)

  .component(LoginPageComponent.$name, LoginPageComponent)
  .component(LogoutComponent.$name, LogoutComponent)
  .name;

/* @ngInject */
function config(appConfig, $stateProvider, $authProvider) {
  $authProvider.loginUrl = `${appConfig.apiUrl}/auth/login`; // eslint-disable-line no-param-reassign

  $stateProvider
    .state('signin', { // complete
      component: LoginPageComponent.$name,
      url: '/signin',
      data: {
        requiresAuth: false
      }
    })
    .state('signout', {
      url: '/signout',
      component: LogoutComponent.$name,
      data: {
        requiresAuth: true
      }
    })
  ;
}
