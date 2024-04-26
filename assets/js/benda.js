function moveBenda() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    
    document.getElementById("movingButton").style.left = x + "px";
    document.getElementById("movingButton").style.top = y + "px";
    
}