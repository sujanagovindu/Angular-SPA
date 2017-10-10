
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
    'myApp.hnr',
  'myApp.view2'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider
      .when('/home', {
          templateUrl: 'home/home.html',
          controller: 'HomeCtrl'
      })
      .when('/view2', {
          templateUrl: 'view2/view2.html',
          controller: 'View2Ctrl'
      })
      .when('/hnr', {
          templateUrl: 'hnr/hnr.html',
          controller: 'HnrCtrl'
      })
  .otherwise({redirectTo: '/home'});
}])
    .controller('AppCtrl', AppCtrl);
AppCtrl.$inject = ['$scope', '$rootScope', '$document', '$window'];
function AppCtrl($scope, $rootScope, $document, $window) {
  var vm=this;
    $scope.menuItemClass='menu-item';
    $scope.menuClass='menu';

    $scope.onMenuPress = function (menuClicked) {
        $scope.menuClicked=!menuClicked;
        $scope.message="in method"+$scope.menuClicked;
        $scope.menuItemClass='menu-item';

        if($scope.menuClicked){
            $scope.menuClass= 'menu-mobile';
            $scope.menuItemClass='menu-item-mobile';
            $scope.menuButtonClass='menu-button-mobile';
        }else{
            $scope.menuClass= 'menu';
            $scope.menuButtonClass='menu-button';
        }

        console.log("in menu press");
        // var element = $document.getElementById("ul-menu");
        //
        // //element.classList.toggle("menu-wrapper-mobile");
        // if (element.className === "menu-mobile") {
        //     element.className += "menu";
        // }
        // else {
        //     element.className += "menu-mobile";
        // }
        //alert("press");
        //console.log("press" + $document.getElementById("show-menu").classList);
    };
}

