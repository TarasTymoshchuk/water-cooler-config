export default AuthService;

AuthService.$name = 'AuthService';
/* @ngInject */
function AuthService(appConfig, $http, SessionService) {
  const commonHeaders = $http.defaults.headers.common;

  return { login, setAuth, getAuth, isAuthenticated, logout };

  function login(credentials) {
    return $http
      .post(`${appConfig.apiUrl}/auth/login`, credentials)
      .then((response) => {
        SessionService.create(response && response.data);

        return SessionService.get();
      });
  }

  function setAuth(user) {
    // $window.localStorage.setItem('currentUser', angular.toJson(user));
    commonHeaders.Authorization = `Bearer ${user.token}`;
    return user;
  }

  function getAuth() {
    return SessionService.get();
  }

  function isAuthenticated() {
    return SessionService.exists();
  }

  function logout() {
    // $window.localStorage.removeItem('currentUser');
    delete commonHeaders.Authorization;
    return SessionService.destroy();
  }
}