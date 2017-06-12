import Home from './home';
import LoginPage from './loginPage';
import ConfigPage from './config';

export default
angular.module('components', [
  Home,
  LoginPage,
  ConfigPage
])
  .name;