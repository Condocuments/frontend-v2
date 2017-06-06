var app = angular.module('App');
app.config(function($locationProvider,$httpProvider,$urlRouterProvider){

    $locationProvider.html5Mode({ enabled: true, requireBase: true });
    //$httpProvider.interceptors.push( 'httpInterceptor' );
});
var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
    return window._; //Underscore should be loaded on the page
});