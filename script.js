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