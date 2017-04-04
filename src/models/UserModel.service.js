UserModel.$name = 'UserModel';

export default
/* @ngInject */
function UserModel($resource, appConfig) {
  return $resource(`${appConfig.apiUrl}/users/:_id`, {
    _id: '@_id'
  }, {
    get: { method: 'GET' },
    delete: { method: 'DELETE' },
    save: { method: 'PUT' },
    create: { method: 'POST' },
    query: { method: 'GET', isArray: true }
  });
}
