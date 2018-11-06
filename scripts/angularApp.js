var myApp = angular.module('myApp',["ngRoute","ngAnimate"]);


//route configration
myApp.config(function($routeProvider){
    $routeProvider

    .when('/',{
        templateUrl : 'pages/about.html',
        controller : 'aboutCtrl'
    })
    .when('/skills',{
        templateUrl : 'pages/skills.html',
        controller : 'skillsCtrl'
    })
    .when('/experience',{
        templateUrl : 'pages/experience.html',
        controller : 'experienceCtrl'
    })
    .otherwise( {redirectTo:'/'} );
});



//about => skills => expe

//main ctrl
myApp.controller('mainCtrl',function($scope,$location){
    $scope.nextPage = function(){
        $location.path('/skills');
    }
    $scope.prevPage = function(){
        $location.path('/experience');
    }
});

//About ctrl
myApp.controller('aboutCtrl',function($scope,$location){
    $scope.$parent.nextPage = function(){
        $location.path('/skills');
    }
    $scope.$parent.prevPage = function(){
        $location.path('/experience');
    }
});

//skills ctrl
myApp.controller('skillsCtrl',function($scope,$location){
    $scope.$parent.nextPage = function(){
        $location.path('/experience');
    }
    $scope.$parent.prevPage = function(){
        $location.path('/');
    }
});

//experience ctrl
myApp.controller('experienceCtrl',function($scope,$location){
    $scope.$parent.nextPage = function(){
        $location.path('/');
    }
    $scope.$parent.prevPage = function(){
        $location.path('/skills');
    }
});

//Scroll top on route
myApp.directive('myScroll', function($rootScope, $anchorScroll) {
    return function(scope, element) {
        $rootScope.$on('$routeChangeStart', function() {
           $anchorScroll(); 
        });
    };
});


