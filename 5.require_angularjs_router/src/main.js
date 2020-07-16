requirejs.config({

    paths:{
        "angular":"../node_modules/angular/angular",
        "jquery":"../node_modules/jquery/dist/jquery.min",
        "bootstrap":"../node_modules/bootstrap/dist/js/bootstrap.min",
        "ui-router":"../node_modules/@uirouter/angularjs/release/angular-ui-router.min"
    },
    shim:{
        "jquery":{
            exports:"jquery" 
        },
        "angular":{
            deps:["jquery"],
            exports:"angular" 
        },
        "bootstrap":{
            "deps":["jquery"]
        },
        "ui-router":{
            deps:["angular"]
        }
    }
    

});