var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");



img2.style.display = "none";
img3.style.display = "none";

img1.addEventListener("click", function(e){
    img1.style.display = "none";

    img2.style.display = "inline";
    img3.style.display = "inline";
    img3.style.height ="200px";
    img3.style.alignItems ="right";


});