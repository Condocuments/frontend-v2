var app = angular.module("App");

app.controller("HomeController" , function($scope,$rootScope,$state , $http){
	console.log("HomeController");
	$scope.condos_list = [];
	$scope.query = {
		q: ''
	}
	$http.get("http://rolycg89.pythonanywhere.com/api/v1/condos").then(function(res){
		console.log(res);
		if(res){
			$scope.condos_list = res.data;
		}
	});

	$scope.search = function(){
		$state.go("all" , {"query" : $scope.query.q});
	}
});

app.controller("AllController" , function($scope,$rootScope,$state,$location,$http){
	console.log("AllController");
	$scope.currentView = "list"

	$scope.toogleView = toogleView;

	init();

	////////////////////////////////////////////////

	function init(){
		var query = $location.search()['query'];

		var url = query ? "http://rolycg89.pythonanywhere.com/api/v1/condos/search?query=" + query : "http://rolycg89.pythonanywhere.com/api/v1/condos"
		$http.get(url).then(function(response){
			if(response){
				$scope.results = response.data;
			}
		});
	}

	function toogleView(view){
		$scope.currentView = view;
	}
});

app.controller("SingleController" , function($scope,$rootScope,$state,$stateParams,$http){
	console.log("SingleController");
	$scope.type = "For sale";
	init();
	$scope.toggle = toggle;

	////////////////////////////////////////////////////////////////////////////////

	function init(){
		$http.get("http://rolycg89.pythonanywhere.com/api/v1/condos/" + $stateParams.slug).then(function(response){
			if(response){
				$scope.condo = response.data;
			}
		});
		$http.get("http://rolycg89.pythonanywhere.com/api/v1/condos/" + $stateParams.slug + "/unit").then(function(response){
			if(response){
				$scope.units = response.data;
				$scope.groups = _.groupBy($scope.units , "beds" , "property_type");
			}
		});
	}

	function toggle(argument) {
		$scope.type = argument;
	}
});

app.controller("LoginController" , function($scope,$rootScope,$state,$stateParams,$http , $localStorage){
	console.log("LoginController");
	$scope.user = {
		"username": "condocuments_test"
	};

	$scope.login = login;
	
	////////////////////////////////////////////////////////////////////////////////
	 function login(){
	 	$http.post("http://rolycg89.pythonanywhere.com/api-token-auth/" , $scope.user).then(function(response){
	 		if(response){

	 			$rootScope.access_token = response.data.token;
	 			$localStorage.access_token = $rootScope.access_token;
	 		}
	 	});
	 }
	
});

app.controller("RegisterController" , function($scope,$rootScope,$state,$stateParams,$http){
	console.log("RegisterController");
	$scope.user = {};
	$scope.register = register;

	////////////////////////////////////////////////////////////////////////////////

	function register(){
		$http.post("http://rolycg89.pythonanywhere.com/api/v1/users/register" , $scope.user).then(function(response){
			if(response){

				$rootScope.user = response.data;
				$localStorage.user = $rootScope.user;
			}
		});
	}
	
});