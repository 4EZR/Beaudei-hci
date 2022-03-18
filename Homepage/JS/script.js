
var slider_content = document.getElementById('box');
var image = ['SLIDE1','SLIDE2', 'SLIDE3'];
var i = image.length;

function nextImage(){
  if (i<image.length) {
      i= i+1;
  }else{
      i = 1;
  }
    slider_content.innerHTML = "<a href='Home.html'><img src= images/"+image[i-1]+".PNG></a> ";
} );

function prewImage(){

  if (i<image.length+1 && i>1) {
      i= i-1;
  }
  else{
      i = image.length;
  }
slider_content.innerHTML = "<a href='Home.html'><img src= images/"+image[i-1]+".PNG></a> ";
  } 
    setInterval(nextImage , 4000);


