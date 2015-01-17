angular
  .module('delivery', [
    'ngRoute',
    'ngResource',
    'ngMessages',
    'ngAnimate',
    'cgNotify'
  ])
  .config(function($routeProvider, $httpProvider, $compileProvider) {

    //$compileProvider.debugInfoEnabled(false);

    $httpProvider.interceptors.push('AuthInterceptor');

    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
      })
      .when('/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl',
      })
      .when('/delivery', {
        templateUrl: 'views/delivery.html',
        controller: 'DeliveryCtrl',
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });