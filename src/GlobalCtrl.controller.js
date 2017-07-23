GlobalCtrl.$name = 'GlobalCtrl';

export default
/* @ngInject */
function GlobalCtrl($scope, $state) {
  const vm = this;

  vm.$state = $state;
  vm.logginedUser = null;
  $state.go('dashboard');

  // vm.signOut = signOut;
  //
  // $scope.$on('userChanged', (e, user) => {
  //   vm.logginedUser = user;
  //   if (!user) {
  //     $state.go('signin');
  //   } else {
  //     //  $state.go('home');
  //   }
  // });
  //
  // function signOut() {
  //   AuthService.signOut();
  // }
}