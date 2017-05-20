var app = angular.module('App',['ui.router']);



// app.run(function($rootScope , $location){
//     $rootScope.$location = $location;
//     $rootScope.$state = $state;
//     $rootScope.meta = {};
//     var domainParts = $location.host().split('.');
//     var env = domainParts.pop();
//     var domain = domainParts.pop() + "." + env;
//     // var subdomain = domainParts.pop();
    
//     if(valid_tlds.indexOf(env) < 0){
//         env = 'com';
//     }

//     var protocol = (env == 'com') ? 'http' : 'http';
//     //var apiURL = protocol+'://api.dastuk.'+env;
    
//     $rootScope.app = {
//         apiURL: apiURL,
//         appURL: 'http://app.condominium.' + env,
//         defaultState: 'app.home',
//         env : env
//     }
// });