const LogoutComponent = {
  $name: 'logoutComponent',
  selector: 'logout',
  bindings: {},
  controller: LogoutCtrl
};
export default LogoutComponent;

/* @ngInject */
function LogoutCtrl(AuthService, $state) {
  AuthService.logout();
  $state.go('signin');
}