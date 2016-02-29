(function() {
	'use strict';
	var app = angular.module('boilerplateApp', [
                                     'ngRoute',
                                     'app.controllers',
                                     'app.filters',
                                     'app.services'
                                    ]);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/dummy', {
				templateUrl: '/partials/dummy.html',
				controller: 'DummyController'
			})
			.otherwise({
				redirectTo: '/dummy'
	   		});
	   }]);	
})();
