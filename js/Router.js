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
        .when('/aries', {
            templateUrl: 'Zordiac_Pages/AllZodiac.html',
            controller: 'ariesController'
        })
        .when('/taurus', {
            templateUrl: 'Zordiac_Pages/AllZodiac.html',
            controller: 'taurusController'
        })
        .when('/gemini', {
            templateUrl: 'Zordiac_Pages/AllZodiac.html',
            controller: 'geminiController'
        })
        .when('/cancer', {
            templateUrl: 'Zordiac_Pages/AllZodiac.html',
            controller: 'cancerController'
        })
        .when('/leo', {
            templateUrl: 'Zordiac_Pages/AllZodiac.html',
            controller: 'leoController'
        })
        .when('/virgo', {
            templateUrl: 'Zordiac_Pages/AllZodiac.html',
            controller: 'virgoController'
        })
        .when('/libra', {
            templateUrl: 'Zordiac_Pages/AllZodiac.html',
            controller: 'libraController'
        })
        .when('/scorpio', {
            templateUrl: 'Zordiac_Pages/AllZodiac.html',
            controller: 'scorpioController'
        })
        .when('/sagittarius', {
            templateUrl: 'Zordiac_Pages/AllZodiac.html',
            controller: 'sagittariusController'
        })
        .when('/capricorn', {
            templateUrl: 'Zordiac_Pages/AllZodiac.html',
            controller: 'capricornController'
        })
        .when('/aquarius', {
            templateUrl: 'Zordiac_Pages/AllZodiac.html',
            controller: 'aquariusController'
        })
        .when('/pisces', {
            templateUrl: 'Zordiac_Pages/AllZodiac.html',
            controller: 'piscesController'
        });
});
