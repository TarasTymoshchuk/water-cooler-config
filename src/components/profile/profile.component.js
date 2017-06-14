import template from './profile.tmpl.html';

const ProfileComponent = {
  $name: 'profileComponent',
  selector: 'profile',
  templateUrl: template,
  controller: ProfileCtrl,
  controllerAs: 'vm'
};

export default ProfileComponent;

/* @ngInject */
function ProfileCtrl() {

}