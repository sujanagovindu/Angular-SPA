
'use strict';

angular.module('myApp.home', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    .controller('HomeCtrl',HomeCtrl);
HomeCtrl.$inject = ['$scope', '$rootScope', '$document', '$window'];
function HomeCtrl($scope, $rootScope, $document, $window) {
var vm = this;


    }
