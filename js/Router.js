// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl: 'Pages/home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'Pages/about.html',
            controller: 'aboutController'
        })
        .when('/video', {
            templateUrl: 'Pages/video.html',
            controller: 'videoController'
        })
        .when('/contact', {
            templateUrl: 'Pages/contact.html',
            controller: 'contactController'
        })
        .when('/aries', {
            templateUrl: 'Pages/AllZodiac.html',
            controller: 'ariesController'
        })
        .when('/taurus', {
            templateUrl: 'Pages/AllZodiac.html',
            controller: 'taurusController'
        })
        .when('/gemini', {
            templateUrl: 'Pages/AllZodiac.html',
            controller: 'geminiController'
        })
        .when('/cancer', {
            templateUrl: 'Pages/AllZodiac.html',
            controller: 'cancerController'
        })
        .when('/leo', {
            templateUrl: 'Pages/AllZodiac.html',
            controller: 'leoController'
        })
        .when('/virgo', {
            templateUrl: 'Pages/AllZodiac.html',
            controller: 'virgoController'
        })
        .when('/libra', {
            templateUrl: 'Pages/AllZodiac.html',
            controller: 'libraController'
        })
        .when('/scorpio', {
            templateUrl: 'Pages/AllZodiac.html',
            controller: 'scorpioController'
        })
        .when('/sagittarius', {
            templateUrl: 'Pages/AllZodiac.html',
            controller: 'sagittariusController'
        })
        .when('/capricorn', {
            templateUrl: 'Pages/AllZodiac.html',
            controller: 'capricornController'
        })
        .when('/aquarius', {
            templateUrl: 'Pages/AllZodiac.html',
            controller: 'aquariusController'
        })
        .when('/pisces', {
            templateUrl: 'Pages/AllZodiac.html',
            controller: 'piscesController'
        });
});
