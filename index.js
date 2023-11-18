$(document).ready(function(){
    var givenSequence = [];
var clickedSequence = [];
var started = false;

$(document).keypress(function(event){
    if(!started){
        givenSequence = [];
        clickedSequence = [];
        nextSequence();
        started =true;
        $("h1").text("level 0");
        $("body").css("background-color","green");
       

    }
})

function nextSequence(){
    var randomNumber = Math.ceil(Math.random()*4);
    if(randomNumber === 1){
        $(".white").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        givenSequence.push(1);
    }
    if(randomNumber === 2){
        $(".blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        givenSequence.push(2);
    }
    if(randomNumber === 3){
        $(".red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        givenSequence.push(3);
    }
    if(randomNumber === 4){
        $(".yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        givenSequence.push(4);
    }
}

function clickedsequence(event){
    clickedSequence.push(event);
    
}


  


$(".white").on("click",function(){
    
    clickedsequence(1);
    $(".white").fadeOut(100).fadeIn(100);
    
    if(arraysAreEqual(clickedSequence,givenSequence)){
        setTimeout(nextSequence,400);
        clickedSequence =[];
        $("h1").text("level " + givenSequence.length);
    }

    
    if(arraysAreEqual(clickedSequence,givenSequence.slice(0,clickedSequence.length)) !== true){
      $("h1").text("Game over. Press any key to restart.");
      started =false;
      $("body").css("background-color","red");
    }
    
    
    
    
    
    

})
$(".blue").on("click",function(){ 

    clickedsequence(2);
   $(".blue").fadeOut(100).fadeIn(100);
   if(arraysAreEqual(clickedSequence,givenSequence)){
    setTimeout(nextSequence,400);
    clickedSequence =[];
    $("h1").text("level " + givenSequence.length);
}

if(arraysAreEqual(clickedSequence,givenSequence.slice(0,clickedSequence.length)) !== true){
    $("h1").text("Game over. Press any key to restart.");
    started =false;
    $("body").css("background-color","red");
  }


   


})
$(".red").on("click",function(){
    clickedsequence(3);
    $(".red").fadeOut(100).fadeIn(100);
    if(arraysAreEqual(clickedSequence,givenSequence)){
        setTimeout(nextSequence,400);
        clickedSequence =[];
        $("h1").text("level " + givenSequence.length);
    }


    if(arraysAreEqual(clickedSequence,givenSequence.slice(0,clickedSequence.length)) !== true){
        $("h1").text("Game over. Press any key to restart.");
        started =false;
        $("body").css("background-color","red");
      }
    
    
    
})
$(".yellow").on("click",function(){
    clickedsequence(4);
    $(".yellow").fadeOut(100).fadeIn(100);
    if(arraysAreEqual(clickedSequence,givenSequence)){
        setTimeout(nextSequence,400);
        clickedSequence =[];
        $("h1").text("level " + givenSequence.length);
    }


    if(arraysAreEqual(clickedSequence,givenSequence.slice(0,clickedSequence.length)) !== true){
        $("h1").text("Game over. Press any key to restart.");
        started =false;
        $("body").css("background-color","red");
      }
    
   
    
})
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

})


    












