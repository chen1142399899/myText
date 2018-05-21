/**
 * Created by chenbo on 2017/4/2.
 */
var b;
var c;//
var d=1;
$(function () {
    //获取DIV下UL LI所有节点
    var a=$("#wow li").length;
    //复制一个LI clone
    // var fl=$("#wow ul li").eq(0).clone();
    // $("#wow ul li").last().after(fl).css({border:"5px solid red"});
	//获取当前下标
     var index=0;
//   定时器 没2.5秒换一次 setInterval

    var autoChange=setInterval(function () {

        if(index<a-1){
           index++;

        }else{
            index=0;
        }
	    // 变换处理函数
	    changeTo(index);

    },2500);

	//清除定时器时候的重置定时器--封装
	function autoChangeAgain(){
		autoChange = setInterval(function(){
			if(index < a-1){
				index ++;
			}else{
				index = 0;
			}
			//调用变换处理函数
			changeTo(index);

		},2500);
	};
// 左圆点鼠标滑入划出事件处理
    $('.left').hover(function () {
	    //滑入清除定时器
	    clearInterval(autoChange);
    },function () {
	    autoChangeAgain();
    });
//    左圆点点击事件
	$('.left').click(function () {
     //  根据index进行上一个图片处理
        index=(index>0)?(--index):(a-1);
		changeTo(index);
	});

//	右原点鼠标滑入事件
	$('.right').hover(function () {
		//滑入清除定时器
		clearInterval(autoChange);
	},function () {
		autoChangeAgain();
	});
//    右原点鼠标点击事件
	$('.left').click(function () {
		index=(index<a)?(++index):(0);
		changeTo(index);
	});
	//对右下角按钮index进行事件绑定处理等
	$(".inTop").find("li").each(function(item){
		$(this).hover(function(){
			clearInterval(autoChange);
			changeTo(item);
			index = item;

		},function(){
			autoChangeAgain();
		});
	});

//变换函数
        function changeTo(num){
            var goLeft = num * 400;

            $("#cb").animate({left: "-" + goLeft + "px"},500);
            //查找div下面的LI标签

            $(".inTop").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
}

});