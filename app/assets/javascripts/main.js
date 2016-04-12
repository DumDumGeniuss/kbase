var KBase = angular.module('KBase',['Devise']);

KBase.config(['$routeProvider',function($routeProvider){
  $routeProvider.
    when('/',{
      templateUrl: '../templates/indexPage.html',
      controller: 'indexPageCtrl'
    }).
    when('/login',{
      templateUrl: '../templates/users/loginPage.html',
      controller: 'loginPageCtrl'
    }).
    otherwise({
      templateUrl: '../templates/indexPage.html',
      controller: 'indexPageCtrl'
    });
}]);
