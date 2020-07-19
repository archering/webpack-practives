const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ConsoleShowHelloPlugin = require("./console.showhello.plugin");
const CopyPackagePlugin = require("./CopyPackagePlugin");
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
        }),
        new ConsoleShowHelloPlugin(),
        {
            apply:function(compiler){
                compiler.hooks.beforeRun.tap("inlineplugin", compilation => {
                    console.log(`------inlineplugin beforeRun--------`);
                });
                compiler.hooks.run.tap("inlineplugin", compilation => {
                    console.log(`------inlineplugin start--------`);
                });
                console.log
                compiler.hooks.done.tap("inlineplugin", () => {
                    console.log(`------inlineplugin  end--------`);
                });                
            }
        },
        new CopyPackagePlugin()
    ]
}