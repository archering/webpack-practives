define(['../ctrl.module'],function(mod){


    mod.controller("about.ctrl",["$scope",function($scope){
        $scope.greeting = "hello world from About page";
    }]);

})