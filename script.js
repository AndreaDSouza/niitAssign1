$(document).ready(function(){
    $("#ex-carousel").carousel();
    
    $(".left").click(function(){
        $("#ex-carousel").carousel("prev");
    });

    $(".right").click(function(){
        $("#ex-carousel").carousel("next");
    });  
});

//$( ".nav-link" ).click(function() {
//  $("p").css("background-color", "yellow");
//});