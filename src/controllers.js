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

	init();

	////////////////////////////////////////////////////////////////////////////////

	function init(){
		$http.get("http://rolycg89.pythonanywhere.com/api/v1/condos/" + $stateParams.slug).then(function(response){
			if(response){
				$scope.condo = response.data;
			}
		});
	}
});