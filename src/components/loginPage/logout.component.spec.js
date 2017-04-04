/* global module, inject, spyOn, expect */

import LoginPageModule, { LogoutComponent } from './index';

describe('Logout Component', () => {
  let $auth;
  let $state;
  let componentController;

  beforeEach(module(LoginPageModule));

  beforeEach(inject(($componentController, $rootScope, $injector) => {
    $auth = $injector.get('$auth');
    $state = $injector.get('$state');
    componentController = $componentController;
    spyOn($state, 'go');
  }));

  it('should logout and go to sign in page', () => {
    $auth.setToken('test');
    expect($auth.isAuthenticated()).toEqual(true);
    componentController(LogoutComponent.$name, { $state, $auth });

    expect($auth.isAuthenticated()).toEqual(false);
    expect($state.go).toHaveBeenCalledWith('signin');
  });
});
