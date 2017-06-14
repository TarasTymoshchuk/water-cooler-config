import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import AppCore from '../../core';
import MessagesComponent from '../messages/messages.component';
import './messagePage.scss';

export default angular.module('messages', [
  AppCore,
  uiRouter,
  uiBootstrap
])
  .config(config)
  .component(MessagesComponent.$name, MessagesComponent)
  .name;

/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state('messages', {
      url: '/config/messages',
      component: MessagesComponent.$name
    });
}
