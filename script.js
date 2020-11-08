//--------------------------slide---------------------
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 3 seconds
}








// -------------------------------nav bar in mobile--------------------------
var MenuItems=document.getElementById("MenuItems");
MenuItems.style.maxHeight="50px";
function menutoggle(){
    if(MenuItems.style.maxHeight=="50px"){
        MenuItems.style.maxHeight="500px";
    }
    else{
        MenuItems.style.maxHeight="50px";
    }
}

// ---------------product gallery-----------------
var ProductImg=document.getElementById("ProductImg");
var SmallImg=document.getElementsByClassName("small-img");

SmallImg[0].onclick=function(){
    ProductImg.src=SmallImg[0].src;
}
SmallImg[1].onclick=function(){
    ProductImg.src=SmallImg[1].src;
}
SmallImg[2].onclick=function(){
    ProductImg.src=SmallImg[2].src;
}
SmallImg[3].onclick=function(){
    ProductImg.src=SmallImg[3].src;
}