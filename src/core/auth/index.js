import angular from 'angular';
import SessionService from './session.service';

export default angular
  .module('core.auth', [
  ])
  .config(config)
  .service(SessionService.$name, SessionService)
  .name;

/* @ngInject */
function config() {

}
