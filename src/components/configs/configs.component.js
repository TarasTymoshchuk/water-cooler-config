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
function ConfigsCtrl() {

}