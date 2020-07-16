define(['../ctrl.module'],function(mod){


    mod.controller("view.ctrl",["$scope",function($scope){
        $scope.greeting = "hello world from VIEW page";
    }]);

})