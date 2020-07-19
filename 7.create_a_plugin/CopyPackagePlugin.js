const fs = require("fs");
const path = require("path");
class CopyPackagePlugin {

    constructor(options){
        //传入用户的配置
        this.options = options || {

        };
    }

    apply(compiler,Compilation){

        //这种方式已经不再使用了
        // compiler.plugin("done",function(compilation,cb){

        //     console.log("done");

        // });

        compiler.hooks.run.tap("CopyPlugin",(compiler,cb)=>{
            console.log("------------开始copy-------------");
            fs.copyFile(path.join(compiler.options.context,"/package.json"),path.join(compiler.options.output.path,"/package.json"),(err)=>{
                if(err){
                    console.log("-------------------copy出错了-----------------");
                }else{
                    console.log("-------------------copy成功-----------------");
                }
            });
        });


        compiler.hooks.done.tapAsync("CopyPlugin",(status)=>{
            console.log("done2");
        });


        //compiler.hooks.someHook.tap(...)
        //取决于不同的钩子类型，也可以在某些钩子上访问 tapAsync 和 tapPromise。

        compiler.hooks.run.tapAsync("CopyPlugin",(compiler,cb)=>{
            // status.compilation.assets.forEach((filename)=>{
            //     console.log("==--------"+filename);
            // });
            //  console.log(compiler.hooks.compilation);
        });

        compiler.hooks.compilation.tap("copyplugin",(compilation,params)=>{
            console.log(compilation);
        });



  console.log(12333);
        compiler.hooks.compilation.tap("copyplugin",(compilation)=>{

           compilation.hooks.chunkAsset.tap("showfilename",(filename)=>{
                 console.log("-----------"+filename);
            });         
        });
    
    }

}

module.exports = CopyPackagePlugin;
