
var x= 50; 

 $(".btn").click( function(){
    x= x+1
 $("p").text(x)
    
 setTimeout(function(){
    $(".btn").addClass("btn3");
},10)

setTimeout(function(){
    $(".btn").removeClass("btn3");

},200);

});


$(".btn2").click( function(){
    x= x-1
 $("p").text(x)

 setTimeout(function(){
    $(".btn2").addClass("btn3");
},10)

setTimeout(function(){
    $(".btn2").removeClass("btn3");

},200);

});
