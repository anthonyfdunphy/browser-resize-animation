/*event listener added to check for window resizing*/
window.addEventListener('resize', animateWindow);

/*function to create visibility on resizing of window*/
function animateWindow(){
    var x = document.getElementById("resize-text");
    x.style.visibility = "visible";
    return true;
}

function animateFunction(){
    if (animateWindow()){
        console.log("Print To Console");
    }
}
