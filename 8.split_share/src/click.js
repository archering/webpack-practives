import $ from 'jquery';
function deal(){
    const btn = $("#clickme");

    btn.on("click",function(){
        alert("hello wrold");
    });
}

export { deal }