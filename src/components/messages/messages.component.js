import template from './messages.tmpl.html';

const MessagesComponent = {
  $name: 'messagesComponent',
  selector: 'messages',
  templateUrl: template,
  controller: MessagesCtrl,
  controllerAs: 'vm'
};

export default MessagesComponent;

/* @ngInject */
function MessagesCtrl() {

}