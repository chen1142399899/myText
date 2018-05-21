/**
 * Created by chenbo on 2016/6/8.
 */
//图片轮播
var a;
var ToDisplayPicNumber;
$(function () {

    $("#b span").on("click",function(){
        $("#b span").removeClass("rn");//删除RN这个类
        $(this).addClass("rn");//添加rn这个类
    } );
    a =$("#a li").length;//获取id为lbo下面ul下面LI的标签个数
    var CurrentIndex;//当前鼠标点击图片索引
    ToDisplayPicNumber = 0;// 自动播放时的图片索引
    $("#b span").click(DisplayPic);//点击时候换图片
    function DisplayPic() {
// 测试是父亲的第几个儿子
        CurrentIndex = $(this).index();
// 删除所有同级兄弟的类属性
        $(this).parent().children().removeClass("CurrentNum rn")
// 为当前元素添加类
        $(this).addClass("CurrentNum");
// 隐藏全部图片
        var Pic = $(this).parent().parent().children("ul");//获取父元素西面子元素Ul子元素集合

        $(Pic).children().hide();
// 显示指定图片
        $(Pic).children("li").eq(CurrentIndex).show();

    }




    setTimeout("PicNumClick()",3000);
});

function PicNumClick() {
    var g = $("#a li #b span").eq(ToDisplayPicNumber);

    $("#b span").eq(ToDisplayPicNumber).trigger("click");
    $("#b span").removeClass("rn");
    $("#lb span").eq(ToDisplayPicNumber).addClass("rn");

    ToDisplayPicNumber = (ToDisplayPicNumber + 1) % a;

    setTimeout("PicNumClick()",3000);
}
