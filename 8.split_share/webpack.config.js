const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    mode:"development",
    entry:{
        main:"./src/index.js"
    },
    output:{
        "path":path.resolve(path.join(__dirname,"./dist"))
    },
    module:{
        rules:[
            { test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader","./mark.loader"]
            }
        ]
    },
    optimization:{//打包优化策略
    
        splitChunks:{// 分包方案
            chunks:"all", // 去所有的包里搜索，搜索范围   initial、async、all
            cacheGroups:{
                default: {  //默认组
                    minChunks: 1,
                    priority: -20,   // 优先级配置项
                    reuseExistingChunk: true
                },
                common:{//公共组
                    name:"shared", //抽取出来文件的名字，默认为 true，表示自动生成文件名
                    test:/[\\/]src[\\/]/, //这里这样写是为了 规避不同操作系统的目录的 斜线意思不同
                    minChunks:1 , //表示被引用次数，默认为1,某个js被通过import require 
                    minSize: 10//表示抽取出来的文件在压缩前的最小大小，默认为 30000
                },
                vendor: { //第三库组， 就是针对第三方库引用测次数超过两次的 用这个策略来分包，
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    priority: 10,
                    minChunks:2,
                    enforce: true
                },
            }
        }
    },
    plugins:[
        new HtmlWebpackPlugin({

            template:"./index.html"   
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new BundleAnalyzerPlugin()
    ]
}