(function(){
	'use strict';
	
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', controller);
		controller.$inject = ['$scope'];
		
		function controller($scope){
			$scope.dishes = "";
			$scope.msg = "";
			
			$scope.answer = function(){
				$scope.msg = count($scope.dishes);
			};
			
			function count(string){
				var num = 0;
				var str = 0;
				const arr = string.split(",");
				num = arr.length;
				str = string.length;
				
				if(str == 0){
					return "Please enter data first";
				}
				if(num <= 3){
					return "Enjoy!";
				}
				else{
					return "Too much!";
				}
			};
		}
})();