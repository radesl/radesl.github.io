$(document).ready(function(){
    scrollColorMenu();
});

$(document).scroll(function(){
    scrollColorMenu();
});

function scrollColorMenu(){
    var menuHeight = $('nav').innerHeight();
    console.log(menuHeight);
    var menuScroll = $(window).scrollTop();
    if(menuScroll > menuHeight){
        $('#main-nav').css({'background-color': '#1ac056'});
        $('#main-nav a').css({'color': 'black'});
    }else{
        $('#main-nav').css({'background-color': ''});
        $('#main-nav a').css({'color': '#172836'});
    }
}