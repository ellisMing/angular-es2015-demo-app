import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserEditController from './edit.controller';

const UserEditModule = angular
  .module('edit', [
    uiRouter
  ])
  .controller('UserEditController', UserEditController);

export default UserEditModule;
