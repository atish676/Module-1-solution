(function(){
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', controller);
		controller.$inject = ['$scope'];
		
		function controller($scope){
			$scope.input = "";
			$scope.msg = "";
			
			$scope.answer = function(){
				$scope.answers = count($scope.input);
			};
			
			function count(string){
				var count = 0;
				for(var i=0; i<string.length; i++){
					if(string.charCodeAt(i) == 44){
						++count;
					}
				}
				if(count == 0){
					return "Please enter data first";
				}
				else if(count <= 3){
					return "Enjoy!";
				}
				else{
					return "Too much!";
				}
			};
		}
})();