/* global module, inject, spyOn, expect */

import LoginPageModule, { LoginPageComponent } from './index';

describe('Login Page Component', () => {
  const TEST_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.' +
    'eyJ1c2VyIjp7Il9pZCI6IjUzZjYxZTEwNmZjNjFhNmMxM2I1Mjc4ZCIsImVtYWlsIjoic2FoYXQ_' +
    'QG1lLmNvbSIsIl9fdiI6MH0sImlhdCI6MTQwODgyMTA5MTY3NiwiZXhwIjoxNDA5NDI1ODkxNjc2fQ.' +
    '0l-ql-ZVjHiILMcMegNb3bNqapt3TZwjHy_ieduioiQ';
  let ctrl;
  let scope;
  let userData;
  let $httpBackend;
  let $auth;
  let $state;

  const localStorageService = {
    get: () => userData,
    set: (key, data) => {
      userData = data;
    }
  };

  beforeEach(module(LoginPageModule));

  beforeEach(inject(($componentController, $rootScope, $injector) => {
    scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    $auth = $injector.get('$auth');
    $auth.removeToken();
    $state = $injector.get('$state');
    ctrl = $componentController(LoginPageComponent.$name, { $scope: scope, $state, localStorageService });
    spyOn($state, 'go');
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should remember user data if remember checked', () => {
    $httpBackend.expectPOST('/api/auth/login', '{"username":"test","rememberMe":true}').respond({ token: TEST_TOKEN });

    ctrl.submitAuth({
      username: 'test',
      rememberMe: true
    });
    $httpBackend.flush();

    expect(userData).toEqual({
      username: 'test',
      rememberMe: true
    });

    expect($auth.getPayload()).toEqual({
      user: { _id: '53f61e106fc61a6c13b5278d', email: 'sahat?@me.com', __v: 0 },
      iat: 1408821091676,
      exp: 1409425891676
    });
    expect($state.go).toHaveBeenCalledWith('companyHome', { companyId: undefined });
  });

  it('should not remember user data if remember not checked', () => {
    $httpBackend.expectPOST('/api/auth/login', '{"username":"test","rememberMe":false}').respond({ token: TEST_TOKEN });

    ctrl.submitAuth({
      username: 'test',
      rememberMe: false
    });
    $httpBackend.flush();

    expect(userData).toEqual({});
  });
});
