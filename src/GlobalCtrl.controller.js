GlobalCtrl.$name = 'GlobalCtrl';

export default
/* @ngInject */
function GlobalCtrl($scope, $state) {
  const vm = this;

  vm.$state = $state;
  vm.logginedUser = null;
  $state.go('dashboard');
}