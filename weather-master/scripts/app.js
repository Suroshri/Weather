'use strict';

angular
    .module('weatherApp', [
        'ngRoute',
        'ngResource'
    ])
    .config(['$locationProvider', locationProvider])
    .config(['$routeProvider', routeProvider]);


    function routeProvider ($routeProvider) {

        $routeProvider
            .when('/city', {
                templateUrl: 'views/city.html',
                controller: 'cityCtrl'
            })
            .when('/coordinates', {
                templateUrl: 'views/coordinates.html',
                controller: 'coordinatesCtrl'
            })
            .otherwise({
                redirectTo:'/city'
            });
    }

    function locationProvider ($locationProvider) {
        $locationProvider.html5Mode(true);
    }