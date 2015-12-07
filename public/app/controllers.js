angular.module('AirplaneCtrls', ['AirplaneServices'])
	.controller('AirplaneCtrl', ['$scope', 'Airplane', function($scope, Airplane) {
		$scope.airplanes = [];


	Airplane.query(function success(data) {
		console.log(data)
    	$scope.airplanes = data;
    	$scope.planesToShow = data;
  			}, function error(data) {
    	console.log(data);
  	});
  	$scope.filterResults = function(term) {
  		var filteredPlanes = [];
  		$scope.airplanes.forEach(function(plane){
  			if (plane.manufacturer.indexOf(term) > -1) {
  				filteredPlanes.push(plane)
  			}
  		})
  		$scope.planesToShow = filteredPlanes
  	}
}]).controller('AirplaneShowCtrl', [
	'$scope', 
	'$routeParams', 
	'Airplane', 
	function($scope, $routeParams, Airplane) {
		Airplane.get({id:$routeParams.id}, function success(data){
			$scope.airplane = data;
		}, function error(data) {
			console.log(data)
		});
	}
]).controller('AirplaneCreateCtrl', [
	'$scope', 
	'$location',
	'Airplane', 
	function($scope, $location, Airplane){
		$scope.name = '';
		$scope.model = '';
		$scope.engine = '';
		$scope.picture = '';
		$scope.createPlane = function() {
			var postData = {
				name: $scope.name,
				model: $scope.model,
				engine: $scope.engine,
				picture: $scope.picture
			};
			var newAirplane = new Airplane(postData);
			newAirplane.$save();
			$location.path('/')

		}
	}
]);