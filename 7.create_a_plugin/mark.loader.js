/****
 *  我们要编写一个loader，这个loader 会把所有扫描到的css文件前面加上一个mark 表示这个文件时 zd写的
 *    mark就是一段注释  /***** from zd  **\/
 ***/

module.exports = function(context){
    //操作context
    context = "/** from zd***/  \r\n" + context;

    return context;
}