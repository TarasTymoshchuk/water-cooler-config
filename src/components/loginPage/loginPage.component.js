import './loginPage.scss';
import template from './loginPage.tpl.html';
import loginForm from './loginForm.json';

const LoginPageComponent = {
  $name: 'loginPageComponent',
  templateUrl: template,
  selector: 'loginPage',
  bindings: {},
  controller: LoginPageCtrl,
  controllerAs: 'vm'
};

export default LoginPageComponent;

/* @ngInject */
function LoginPageCtrl($scope, $state, localStorageService, AuthService) {
  const auth = AuthService;
  const STORAGE_KEY = 'authData';
  const vm = this;

  vm.loginForm = loginForm;
  vm.submitAuth = submitAuth;
  vm.differentUser = differentUser;
  vm.submit = submit;

  // load login & password from localstorage if exists
  const localAuthData = localStorageService.get(STORAGE_KEY) || {};

  vm.isLocked = !!localAuthData.username;
  vm.user = {
    username: localAuthData.username || '',
    password: localAuthData.password || ''
  };

  function differentUser() {
    localStorageService.set(STORAGE_KEY, {});
    vm.isLocked = false;
    vm.user = {
      username: '',
      password: ''
    };
  }

  function submitAuth(user) {
    vm.errors = null;
    localStorageService.set(user);
    vm.loading = true;
    auth.login(user).then((response) => {
      vm.loading = false;
      if (response) {
        return $state.go('home');
      }
      return null;
    }).catch((error) => {
      vm.loading = false;
      $scope.$broadcast('schemaForm.error.username', 'invalidUsername', error.message, false);
    });
  }

  function submit() {
    $state.go('config');
  }
}