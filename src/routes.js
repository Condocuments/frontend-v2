app.config(function ($stateProvider, $httpProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: '/html/home.html',
            controller: 'HomeController'
        })
        .state('all' , {
            url: '/all?query=',
            templateUrl: '/html/all.html',
            controller: 'AllController',
            params: {
                query:''
            }
        })
        .state('login' , {
            url: '/login',
            templateUrl: '/html/login.html',
            controller: 'LoginController'
        })
        .state('register' , {
            url: '/register',
            templateUrl: '/html/register.html',
            controller: 'RegisterController'
        })
        .state('single' , {
            url: '/:slug',
            templateUrl: '/html/single.html',
            controller: 'SingleController'
        })

});