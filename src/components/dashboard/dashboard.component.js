import template from './dashboard.tmpl.html';
import './dashboard.scss';

const DashboardComponent = {
  $name: 'dashboardComponent',
  selector: 'dashboard',
  templateUrl: template,
  bindings: {
    config: '='
  },
  controller: DashboardCtrl,
  controllerAs: 'vm'
};

export default DashboardComponent;

/* @ngInject */
function DashboardCtrl($log) {
  const vm = this;
  vm.level = 0.8;

  vm.saveConfig = (config) => {
    vm.config = config;
    const save = config._id ? config.$save : config.$create;
    const data = angular.copy(config);
    vm.loading = true;
    vm.err = null;

    save.call(data).then(() => {
      vm.loading = false;
      $log.log('Save successfully');
    }).catch((err) => {
      vm.loading = false;
      $log.log('Error!');
      vm.err = err && err.data && err.data.message;
    });
  };
}
