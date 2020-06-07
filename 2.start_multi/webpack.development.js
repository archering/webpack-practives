const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"development",
    entry:{
        "home":"./src/home.js",
        "index":"./src/index.js"
    },
    output:{
        path:path.resolve(path.join(__dirname,"./dist"))
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template:"./src/home.html",
            filename:"home.html",
            chunks:['home']   
        })
    ]
}