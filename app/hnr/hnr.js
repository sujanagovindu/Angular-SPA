'use strict';

angular.module('myApp.hnr', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hnr', {
    templateUrl: 'hnr/hnr.html',
    controller: 'HnrCtrl'
  });
}])

.controller('HnrCtrl', HnrCtrl);
HnrCtrl.$inject = ['$scope', '$rootScope', '$document', '$window'];
   function HnrCtrl($scope,$rootScope, $document, $window) {
$scope.doSomething = function () {
    console.log("in something");

}

}