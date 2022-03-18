
var i = 0;
var images = [];
var time = 3000;

// Image List
images[0]= "images/SLIDE1.PNG";
images[1]= "images/SLIDE2.PNG";
images[2]= "images/SLIDE3.png";
images[3]= "images/SLIDE4.png";
images[4]="imageS/1.png";

//Change Image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}
    window.onload = changeImg;
