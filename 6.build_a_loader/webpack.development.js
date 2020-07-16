const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader","./mark.loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({

            template:"./src/index.html"   
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ]
}