	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function ($routeProvider) {
	    $routeProvider

	        // route for the home page
	        .when('/', {
	            templateUrl: 'Zordiac_Pages/home.html',
	            controller: 'mainController'
	        })

	        // route for the about page
	        .when('/about', {
	            templateUrl: 'Zordiac_Pages/about.html',
	            controller: 'aboutController'
	        })

	        // route for the contact page
	        .when('/contact', {
	            templateUrl: 'Zordiac_Pages/contact.html',
	            controller: 'contactController'
	        })
	        .when('/aries', {
	            templateUrl: 'Zordiac_Pages/AllZodiac.html',
	            controller: 'ariesController'
	        })

	        .when('/taurus', {
	            templateUrl: 'Zodiac_Pages/Taurus.html',
	            controller: 'taurusController'
	        });
	});
