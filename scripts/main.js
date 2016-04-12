$(document).ready(function (){
    setInterval(function(){ 
   $("#slider li").first().appendTo($("#slider ul"));
    }, 3500);
});
/*$(document).ready(function (){
      setInterval(function(){
         $(".slider ul").animate({marginLeft:-960},800,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
         })
      }, 3500);
   });*/


//SIDEBAR ANIMATION PHOTO
$(document).ready(function () {
    $("#monCompte img").on("mouseenter", function () {
        $(this).animate({
            marginTop: "-45px", 
        }, 500);
        $("#monCompte a").show(500);
    });
    $("#monCompte a").on("mouseleave", function () {
        $(this).hide(500);
        $("#monCompte img").animate({
            marginTop: "0px",
        }, 500);
    });
});

//MENU ANIMATION
$(document).ready(function () {
    $("#menu ul li").on("mouseenter", function () {
        $(this).first().animate({
            marginLeft: "-45px", 
        }, 500);
        $(this).find("a").show(500);
    });
    $("#menu ul li").on("mouseleave", function () {
        $(this).first().animate({
            marginLeft: "0px", 
        }, 500);
        $(this).find("a").hide(500);
    });
});