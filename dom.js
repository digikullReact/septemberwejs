let buttonelement=document.getElementById("btn"); // I selected the button html element
let buttonelement2=document.getElementById("btn2"); // I selected the button html element

let htmlelement=document.getElementById("heading");
buttonelement.addEventListener("click",function(){
    //alert("button clicked")
   
htmlelement.style.color="green";


})


buttonelement2.addEventListener("click",function(){
    //alert("button clicked")
   
htmlelement.style.fontFamily="verdana";


})
// create another button that changes the font family of the heading on its click
