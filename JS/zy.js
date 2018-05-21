$(function () {


/*
 $(".menu li").mouseenter(function () {
 $(this).children("ul").show(2000);
 });
 $(".menu li").mouseleave(function () {
 $(this).children("ul").hide(1000);
 });
*/




//显示隐藏菜单

    $(".menu li").hover(function () {
        $(this).children("ul").slideToggle(600);
    });

//右下角弹出广告


    //手风琴效果
    //
    $(".top-auto li").each(function (i,ele) {
        $(this).css("background","url(img/"+ (i + 1) +".jpg)");
    }).mouseenter(function () {
        //stop停止在指定元素上的动画 animate 添加动画 siblings 同辈元素的元素集合
        $(this).stop().animate({width : 600},500).siblings("li").stop().animate({ width: 100},500);
    }).mouseleave(function () {
        $(".top-auto li").stop().animate({width:200},500);
    });
});