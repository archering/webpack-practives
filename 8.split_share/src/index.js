import { Math } from './a';
import  log  from './b';

window.addEventListener("load",function(){

    let add = document.getElementById("hello");
    let minus = document.getElementById("alo");

    add.innerHTML = `1 + 2 = ${new Math().calcTwo(1,2)}`

    log("通过引用计算 1 + 2的值");

    minus.innerHTML = `10 - 9 = ${new Math().calcMinus(10,9)}`


    log("通过引用计算 10 - 9的值");
});