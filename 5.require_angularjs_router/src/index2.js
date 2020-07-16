//define(["./main"],function(){

    require(['angular','jquery','bootstrap',
    "ui-router",
    './js/ctrl.module',
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "./css/common.css",
    "./css/main.css"
    ],function(angular,$){
        
        let app = angular.module("app",["ui.router",'common.mod']);

        app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

            $stateProvider
                .state('home',{
                    url:'/home',
                    template:require('./js/home/home.html'),
                    controller:"home.ctrl",
                    resolve:{
                        loadCtrl:function(){
                            const promise = new Promise((resolve)=>{

                                require.ensure([],function(){
                                    const module = require("./js/home/homeCtrl.js");
                                    resolve(module);
                                });
        
                            });
                            return promise;                           
                        }
                    }
                })
                .state('about',{
                    url:'/about',
                    template:require('./js/about/about.html'),
                    controller:'about.ctrl',
                    resolve:function(){
                        loadCtrl:{
                            const promise = new Promise((resolve)=>{

                                require.ensure([],function(){
                                    const module = require("./js/about/aboutCtrl.js");
                                    resolve(module);
                                });
        
                            });
                            return promise;                           
                        }
                    }   
                })
                .state('view',{
                    url:'/view',
                    template:require('./js/view/view.html'),
                    controller:'view.ctrl',
                    resolve:function(){
                        loadCtrl:{
                            const promise = new Promise((resolve)=>{

                                require.ensure([],function(){
                                    const module = require("./js/view/viewCtrl.js");
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
            angular.bootstrap(document.body,["app"]);
        });

    });

 //});