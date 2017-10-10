
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
    $scope.data = {
        "name":"",
        "email":"",
        "checkin":"",
        "checkout":"",
        "room":["Single","Double","Family","Suite"],
        "adults":[1,2,3,4],
        "kids":[1,2,3,4],
    };
$scope.bookNow = function() {
        console.log("in book now");
    }
    }
