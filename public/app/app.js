var app = angular.module('AirplaneApp', ['AirplaneServices', 'AirplaneCtrls' ,'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'app/index.html',
		controller: 'AirplaneCtrl'
	})
	.when('/about',{
		templateUrl: 'app/views/about.html'
	}).when('/planes/new', {
		templateUrl: 'app/views/new.html',
		controller: 'AirplaneCreateCtrl'
	}).when('/planes/:id', {
		templateUrl: 'app/views/show.html',
		controller: 'AirplaneShowCtrl'
	}).otherwise({
		templateUrl: 'app/views/404.html'
	})
	$locationProvider.html5Mode(true);
}])