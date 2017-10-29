$(document).ready(function(){
    addScroll()
});

$(document).scroll(function(){
    addScroll()
});

function addScroll(){
    var height = $('#main-nav').height();
    var scroll = $(window).scrollTop();
    
    if(scroll > height){
        $('#main-nav').addClass('transparent-blue');
    }else{
        $('#main-nav').removeClass('transparent-blue');
    }
}