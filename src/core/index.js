import angular from 'angular';
import services from './services';

export default angular.module('app.core', [
  services
])
.name;
