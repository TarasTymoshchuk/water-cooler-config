import Home from './home';
import LoginPage from './loginPage';
import ConfigPage from './config';
import MessagesPage from './messages';
import ProfilePage from './profile';

export default
angular.module('components', [
  Home,
  LoginPage,
  ConfigPage,
  MessagesPage,
  ProfilePage
])
  .name;