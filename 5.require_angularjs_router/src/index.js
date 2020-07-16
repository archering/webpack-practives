 define(["./main"],function(){

    require(['angular','jquery','bootstrap',"ui-router",'./js/ctrl.module'],function(angular,$){
        
        let app = angular.module("app",["ui.router",'common.mod']);

        app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

            $stateProvider
                .state('home',{
                    url:'/home',
                    templateUrl:'./js/home/home.html',
                    controller:"home.ctrl",
                    resolve:{
                        loadCtrl:function(){
                            const promise = new Promise((resolve)=>{

                                require(["./js/home/homeCtrl.js"],function(module){
                                    resolve(module);
                                });
        
                            });
                            return promise;                           
                        }
                    }
                })
                .state('about',{
                    url:'/about',
                    templateUrl:'./js/about/about.html',
                    controller:'about.ctrl',
                    resolve:function(){
                        loadCtrl:{
                            const promise = new Promise((resolve)=>{

                                require(["./js/about/aboutCtrl.js"],function(module){
                                    resolve(module);
                                });
        
                            });
                            return promise;                           
                        }
                    }   
                })
                .state('view',{
                    url:'/view',
                    templateUrl:'./js/view/view.html',
                    controller:'view.ctrl',
                    resolve:function(){
                        loadCtrl:{
                            const promise = new Promise((resolve)=>{

                                require(["./js/view/viewCtrl.js"],function(module){
                                    resolve(module);
                                });
        
                            });
                            return promise;                           
                        }
                    }  
                });

                $urlRouterProvider.otherwise("/home");

        }]);

        $(function(){
            angular.bootstrap(document.body,["app","common.mod"]);
        });

    });

 });