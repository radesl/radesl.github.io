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
    console.log(menuScroll);
    if(menuScroll > menuHeight){
        $('#main-nav').css({'background-color': '#1ac056'});
    }else{
        $('#main-nav').css({'background-color': ''});
    }
}