const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:"development",
    entry:{
        main:"./src/index.js"
    },
    output:{
        "path":path.resolve(path.join(__dirname,"./dist"))
    },
    plugins:[
        new HtmlWebpackPlugin({

            template:"./src/index.html"   
        })
    ]
}