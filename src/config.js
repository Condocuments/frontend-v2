var app = angular.module('App');
app.config(function($locationProvider,$httpProvider,$urlRouterProvider){

    $locationProvider.html5Mode({ enabled: true, requireBase: true });
    //$httpProvider.interceptors.push( 'httpInterceptor' );
});