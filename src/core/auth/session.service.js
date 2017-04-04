
SessionService.$name = 'SessionService';

export default
/* @ngInject */
function SessionService() {
  let _userData = null;

  return { create, destroy, get, exists };

  function create(userData) {
    _userData = userData;
  }

  function destroy() {
    _userData = null;
  }

  function get() {
    return _userData;
  }

  function exists() {
    return !!_userData;
  }
}