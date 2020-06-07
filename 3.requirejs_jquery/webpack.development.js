const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    entry:{
        "index":"./src/index.js"
    },
    output:{
        path:path.resolve(path.join(__dirname,"./dist"))
    },
    resolve:{
        alias:{
            "jquery":path.resolve(path.join(__dirname,"./node_modules/jquery/dist/jquery.min.js")),
            "bootstrap":path.resolve(path.join(__dirname,"./node_modules/bootstrap/dist/js/bootstrap.min.js")),
            "$":"jquery"
        }
    },
    module:{
        rules:[
            {
                test:/jquery/,
                loader:'exports?jquery',   
            },
            {
                test:/bootstrap/,
                loader:'imports?jquery'   
            }
        ]  
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject:false,
            template:"./src/index.html"
        })
    ]
}