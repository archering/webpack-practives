const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Webpack = require("webpack");
module.exports = {
    mode:"development",
    entry:{
        "index":"./src/index2.js",
        "3lib":["angular","ui-router","jquery",'bootstrap'],
    },
    output:{
        path:path.resolve(path.join(__dirname,"./dist"))
    },
    resolve:{
        modules:[
            path.resolve(path.join(__dirname,"./node_modules"))
        ],
        alias:{
            "angular":path.resolve(path.join(__dirname,"./node_modules/angular/angular")),
            "ui-router":path.resolve(path.join(__dirname,"./node_modules/@uirouter/angularjs/release/angular-ui-router.min")),
            "jquery":path.resolve(path.join(__dirname,"./node_modules/jquery/dist/jquery.min")),
            "bootstrap":path.resolve(path.join(__dirname,"./node_modules/bootstrap/dist/js/bootstrap.min"))
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            },
            {
                test:/\.(eot|woff|woff2|ttf|svg)$/,
                use:[
                    {
                        loader:"file-loader"
                    },{
                        loader:"url-loader", //A loader for webpack which transforms files into base64 URIs
                        options:{
                            limit: 1024,
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                loader:"html-loader"
            }
        ]  
    },
    optimization:{
        splitChunks : {
            cacheGroups : {
                a: {
                    chunks:'all',
                    test: /[\\/]node_modules[\\/]/,
                    name: '3lib',
                    priority: -10,
                    enforce: true,
                }             
            }
        }       
    },  
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index2.html",
            filename:"index2.html"
        }),
        new Webpack.ProvidePlugin({
            "jquery":"jquery",
            "jQuery":"jquery",
            "window.$":"jquery",
            'angular':"angular",
            "window.angular":"angular"
        }),
        new CleanWebpackPlugin()
    ]
}