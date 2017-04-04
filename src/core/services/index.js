import angular from 'angular';
import angularResource from 'angular-resource';
import satellizer from 'satellizer';
import ngCookies from 'angular-cookies';
import AppConfig from './appConfig';
import AuthService from './auth.service';
import AuthFailedFactory from './authFailed.factory';
import authHookRunBlockService from './authHook.service';
import auth from '../auth';

export default angular
  .module('core.services', [
    auth,
    angularResource,
    satellizer,
    ngCookies
  ])
  .constant('appConfig', AppConfig)
  .service(AuthService.$name, AuthService)
  .factory(AuthFailedFactory.$name, AuthFailedFactory)
  .config(config)
  .run(authHookRunBlockService)
  .name;

/* @ngInject */
function config($httpProvider) {
  $httpProvider.interceptors.push(AuthFailedFactory.$name);
}
