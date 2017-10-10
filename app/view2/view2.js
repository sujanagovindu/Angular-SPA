'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/hnr.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', View2Ctrl);
    var View2Ctrl = function() {

};