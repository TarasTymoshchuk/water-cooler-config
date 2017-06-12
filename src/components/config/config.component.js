import template from './config.tmpl.html';
import './config.scss';

const ConfigComponent = {
  $name: 'configComponent',
  selector: 'home',
  templateUrl: template,
  bindings: {
    config: '='
  },
  controller: ConfigCtrl,
  controllerAs: 'vm'
};

export default ConfigComponent;

/* @ngInject */
function ConfigCtrl($log) {
  const vm = this;

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
