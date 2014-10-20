var app = angular.module('sourceCalc');

app.controller('mainCtrl', function($scope, mainService){
	$scope.yearlySavings = "_____";
	$scope.monthlySavings = "_____";
	$scope.perTime = 'Per Year';
	$scope.notPerTime = 'Per Month';

	$scope.toDo = true;

	$scope.changeTime = function(){
		if($scope.perTime === 'Per Month') {
			$scope.perTime = 'Per Year';
			$scope.toDo = true;
		} else {
			$scope.perTime = 'Per Month';
			$scope.toDo = false;
		}

		if($scope.notPerTime === 'Per Year'){
			$scope.notPerTime = 'Per Month';
		} else {
			$scope.notPerTime = 'Per Year';
		}
	}


	$scope.calcSavings = function(){
		//First Handling Errors
		if($scope.units === undefined){
			$scope.yearlySavings = "NEED UNITS";
			$scope.monthlySavings = "NEED UNITS";
			return;
		};
		if($scope.savings === undefined){
			$scope.yearlySavings = "NEED SAVINGS";
			$scope.monthlySavings = "NEED SAVINGS";
			return;
		}

		var savings = $scope.units * $scope.savings;
		if($scope.toDo){
			$scope.yearlySavings = savings.toFixed(2);
			$scope.monthlySavings = (savings/12).toFixed(2);
		}
		else if(!$scope.toDo) {
			$scope.yearlySavings = (savings*12).toFixed(2);
			$scope.monthlySavings = (savings).toFixed(2);
		}
	}


});