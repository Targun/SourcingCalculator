var app = angular.module('sourceCalc');


app.directive('radio', function(){
	return function(scope, element, attrs){
		element.bind(function() {
            scope.boolChangeClass = !scope.boolChangeClass;
            scope.$apply();
        });
    };
});