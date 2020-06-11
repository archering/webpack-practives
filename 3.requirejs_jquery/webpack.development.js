const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Webpack = require("webpack");
module.exports = {
    mode:"development",
    entry:{
        "index":"./src/index.js"
    },
    output:{
        path:path.resolve(path.join(__dirname,"./dist"))
    },
    resolve:{
        modules:[
            path.resolve(path.join(__dirname,"./node_modules"))
        ],
        alias:{
            "jquery":path.resolve(path.join(__dirname,"./node_modules/jquery/dist/jquery.min.js")),
            "bootstrap":path.resolve(path.join(__dirname,"./node_modules/bootstrap/dist/js/bootstrap.min"))
        }
    },
    module:{
        rules:[]  
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index2.html"
        }),
        new Webpack.ProvidePlugin({
            "jquery":"jquery",
            "jQuery":"jquery",
            "window.$":"jquery"
        }),
        new CleanWebpackPlugin()
    ]
}