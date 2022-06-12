/* script created to display div when resizing browser window*/ 

var doit;
function resized(){
    var x = document.getElementById("resize-text");
    x.style.visibility = "hidden";
}

window.onresize = function() {
    var x = document.getElementById("resize-text");
    x.style.visibility = "visible";
    clearTimeout(doit);
    doit = setTimeout(function() {
        resized();
    }, 250);
};