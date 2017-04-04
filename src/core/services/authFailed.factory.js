AuthFailedFactory.$name = 'AuthFailedFactory';

export default
/* @ngInject */
function AuthFailedFactory($q, $injector, $rootScope) {
  return {
    request: (config) => {
      if ($rootScope.currentCompany) {
        config.headers['X-Company'] = $rootScope.currentCompany.id; // eslint-disable-line no-param-reassign
      }
      return config;
    },
    requestError: rejection => $q.reject(rejection),
    response: response => response,
    responseError: (rejection) => {
      if (rejection.status === 401) {
        const $state = $injector.get('$state');
        $state.go('signin');
      }
      return $q.reject(rejection);
    }
  };
}