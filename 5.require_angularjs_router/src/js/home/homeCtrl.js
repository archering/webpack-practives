define(['../ctrl.module'],function(mod){


    mod.controller("home.ctrl",["$scope",function($scope){
        $scope.greeting = "hello world from home page";
    }]);

})