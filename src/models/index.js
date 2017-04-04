import angular from 'angular';
import ngResource from 'angular-resource';
import AppCore from '../core';
import UserModel from './UserModel.service';

const moduleName = 'models';
export default moduleName;
export { UserModel };

angular.module(moduleName, [
  AppCore,
  ngResource
])
  .config(config)
  .factory(UserModel.$name, UserModel)
;

/* @ngInject */
function config() {
}
