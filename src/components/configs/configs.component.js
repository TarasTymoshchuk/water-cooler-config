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
function ConfigsCtrl($location, $http, $log, $scope) {
  const vm = this;
  vm.loading = false;
  const mobileNumberPrefix = '+380';
  const mobileNumberMask = `${mobileNumberPrefix} 99 999 99 99`;

  vm.mobileNumberMask = $location.search().mobileNumberMask || mobileNumberMask;
  vm.mobileNumberPrefix = $location.search().mobileNumberPrefix || mobileNumberPrefix;

  vm.$onInit = () => {
    getConfigs();
  };

  function getConfigs() {
    $http.get('https://pvtxez7kl7.execute-api.eu-west-1.amazonaws.com/prod/getSmartCoolerConfig').then((configs) => {
      vm.config = configs;
      vm.config.TWILLIO_PHONE_NUMBER_TO =
              vm.config.data.TWILLIO_PHONE_NUMBER_TO.toString()
                  .substring(4, vm.config.data.TWILLIO_PHONE_NUMBER_TO.length);
    }).catch((error) => {
      vm.error = error;
      $log.log('ERROR!', error);
    });
  }

  vm.updateConfigs = (config) => {
    $scope.$watch('vm.config.TWILLIO_PHONE_NUMBER_TO', (value) => {
      vm.config.data.TWILLIO_PHONE_NUMBER_TO = value && `${vm.mobileNumberPrefix}${value}`;
    });
    $http.put('https://23kl9657m1.execute-api.eu-west-1.amazonaws.com/prod/setSmartCoolerConfig', config)
        .then(() => {
          getConfigs();
        }).catch((error) => {
          vm.error = error;
          $log.log('ERROR!', error);
        });
  };
}
