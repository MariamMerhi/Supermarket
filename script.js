var i = 0;
var images = [];
var time = 5000;


images[0] = "images/bigsale-4.gif"
images[1] = "images/bigsale-2.webp"
images[2] = "images/bigsale-3.jpg"
images[3] = "images/bigsale-1.webp"

function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {

        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;