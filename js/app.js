'use strict';

var html5mode = function($locationProvider) {
  $locationProvider.html5Mode(true);
}

var routes = function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/app.html', controller: AppCtrl});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: LoginCtrl});
  $routeProvider.when('/account', {templateUrl: 'partials/account.html', controller: AccountCtrl});
  $routeProvider.otherwise({redirectTo: '/'});
}

// Declare app level module which depends on filters, and services
angular.module('baconflow', ['baconflow.filters', 'baconflow.services', 'baconflow.directives'])
  .config(html5mode)
  .config(routes);
