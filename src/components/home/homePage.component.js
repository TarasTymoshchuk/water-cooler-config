import template from './home.tmpl.html';
import './home.scss';

const HomePageComponent = {
  $name: 'homeComponent',
  selector: 'home',
  templateUrl: template,
  bindings: {},
  controller: HomeCtrl,
  controllerAs: 'vm'
};

export default HomePageComponent;

/* @ngInject */
function HomeCtrl($log, SessionService) {
  $log.info('HomeCtrl', SessionService.get());
}