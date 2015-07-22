
/*
Directive to update model. Both direct and indirectly. No validation 
*/
angular.module('angularPlay.directives')
	.directive('spsEdit',
		function() {
			return {
				restrict: 'EA',
				// if we use ngModel, we can manipulate the parent scopes model
				require: 'ngModel',
				templateUrl: '/templates/editExample.html',
				// two way binding
				scope: {
					ngModel: "=",
					update: "&",
					value: "@text" //naming attributes for tag
				},
				link: function(scope, element, attr, ngModel) {
	                console.log(scope, element, attr);
	                console.log(ngModel);
				}
			};
		});
