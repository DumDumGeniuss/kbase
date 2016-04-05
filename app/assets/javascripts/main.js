var KBase = angular.module('KBase',[]);

KBase.config(['$routeProvider',function($routeProvider){
  $routeProvider.
    when('/',{
      templateUrl: '../templates/indexPage.html',
      controller: 'indexPageCtrl'
    }).
    otherwise({
      templateUrl: '../templates/indexPage.html',
      controller: 'indexPageCtrl'
    });
}]);
