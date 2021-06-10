var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider',

    function($routeProvider){
        $routeProvider.
        

        when('/Angular',{
            templateUrl: 'Angular.html',
            controller: 'Angular.controller'
        }).

        when('/Node',{
            templateUrl: 'Node.html',
            controller: 'Node.controller'
        });
}]);


myApp.controller('AngularController', function($scope){
    
})