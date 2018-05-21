/**
 * Created by chenbo on 2017/7/7.
 */
//轮播插件
(function ($) {

	$.fn.lb=function (dd) {
		var dd={
			
		};
		var b;
		var c;//
		var d=1;
		var a=this.length;//LI长度
		var index=0;//定时器
		//定时器每2.5秒换一次
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
		//变换函数
		function changeTo(num){
			var goLeft = num * 400;

			$("#cb").animate({left: "-" + goLeft + "px"},500);
			//查找div下面的LI标签

			// $(".inTop").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
		}
		alert(a);
	}

})(jQuery);

