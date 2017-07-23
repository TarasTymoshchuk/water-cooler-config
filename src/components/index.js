import LoginPage from './loginPage';
import DashboardPage from './dashboard';
import ConfigsPage from './configs';

export default
angular.module('components', [
  LoginPage,
  DashboardPage,
  ConfigsPage
])
  .name;