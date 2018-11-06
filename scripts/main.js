$(document).ready(function(){
    $(".closeNav").click(function(){
        $(".overlay").css({
            width:0,
            opacity:0
        });
        $(".openNav").css({
            visibility:'visible'
        });
    });

    $(".openNav").click(function(){
        $(".overlay").css({
            width:'100%',
            opacity:1
        });
        $(this).css({
            visibility:'hidden'
        });
    });

});