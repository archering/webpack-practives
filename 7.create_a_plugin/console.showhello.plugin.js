const pluginName = "ConsoleShowHelloPlugin";

class ConsoleShowHelloPlugin {
    
    apply(compiler){
        compiler.hooks.beforeRun.tap(pluginName, compilation => {
            console.log(`------${pluginName} beforeRun--------`);
        });
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log(`------${pluginName} start--------`);
        });
        console.log
        compiler.hooks.done.tap(pluginName, () => {
            console.log(`------${pluginName} end--------`);
        });
    }

}


module.exports = ConsoleShowHelloPlugin;