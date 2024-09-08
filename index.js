var numberofdrums = document.querySelectorAll(".drum").length;
for(var i=0;i<numberofdrums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   //this.style.color="white";
   var word=this.innerHTML;

   makesound(word);
   buttonpress(word);
  
});
}
document.addEventListener("keypress",function(event){
   
    makesound(event.key);
    buttonpress(event.key);
})

function makesound(ok){
    switch (ok) {
        case "w":
            var a=new Audio("sounds/crash.mp3");
            a.play();
            
        break;
            case "a":
            var b=new Audio("sounds/tom-1.mp3");
            b.play();
            
        break;
        case "s":
            var b=new Audio("sounds/kick-bass.mp3");
            b.play();
            
        break; 
        case "d":
        var b=new Audio("sounds/snare.mp3");
        b.play();
        
    break;
    case "j":
        var b=new Audio("sounds/tom-2.mp3");
        b.play();
        
    break;
    case "k":
        var b=new Audio("sounds/tom-3.mp3");
        b.play();
        
    break;
    case "l":
        var b=new Audio("sounds/tom-4.mp3");
        b.play();
        
    break;
    
       
        default:console.log(ok);
            
       }

}
function buttonpress(currentkey){
     var current=document.querySelector("."+currentkey);
     current.classList.add("pressed");
     setTimeout(function(){
        current.classList.remove("pressed");
     },100);
}




//var audio=new Audio("sounds/tom-1.mp3");
//audio.play();