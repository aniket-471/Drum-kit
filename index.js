for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
}
function handleclick()
{
    buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    ba(buttonInnerHTML);
}
document.addEventListener("keypress",function(e){
   makeSound(e.key);
   ba(e.key);
})
function makeSound(key)
{
    var buttonInnerHTML=this.innerHTML;
    switch(key)
    {
     case "w":
         var tom1=new Audio('crash.mp3');
         tom1.play();
     break;
     case "a":
         var tom2=new Audio('tom-2.mp3');
         tom2.play();
     break;
     case "s":
         var tom3=new Audio('tom-3.mp3');
         tom3.play();
     break;
     case "d":
         var tom4=new Audio('tom-4.mp3');
         tom4.play();
     break;
     case "j":
         var crash=new Audio('tom-1.mp3');
         crash.play();
     break;
     case "k":
         var snare=new Audio('snare.mp3');
         snare.play();
     break;
     case "l":
         var kick=new Audio('kick-bass.mp3');
         kick.play();
     break;
 
     default:
         console.log(buttonInnerHTML);
    }
}
function ba(ck){
var activeButton=document.querySelector("."+ck);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100)
}
