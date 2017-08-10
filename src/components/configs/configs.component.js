import template from './configs.tmpl.html';

const ConfigsComponent = {
  $name: 'configsComponent',
  selector: 'configs',
  templateUrl: template,
  controller: ConfigsCtrl,
  controllerAs: 'vm'
};

export default ConfigsComponent;

/* @ngInject */
function ConfigsCtrl($scope, $location, appConfig) {
  const vm = this;

  vm.mobileNumberMask = $location.search().mobileNumberMask || appConfig.mobileNumberMask;
  vm.mobileNumberPrefix = $location.search().mobileNumberPrefix || appConfig.mobileNumberPrefix;

  // $scope.$watch('vm.mobileNumber', (value) => {
  //   vm.config.mobileNumber = value && `${vm.mobileNumberPrefix}${value}`;
  // });
}