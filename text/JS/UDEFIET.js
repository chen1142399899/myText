/**
 * Created by chenbo on 2016/6/8.
 */
//点击事件，点击显示更多
$(function () {
    $("#gink").click(function () {
        $("#gaodu").css("height","430px");
        $("#getgaodu").hide();
    });
    $("#topMeuLink").mouseover(function () {
        $("#gaodu").css("height","305px");
        $("#getgaodu").show();
    });
});
//图片轮播
var a = 0;
var ToDisplayPicNumber;
$(function () {

    $("#lbo div span").on("click",function(){
        $("#lbo div span").removeClass("rn");
        $(this).addClass("rn");
    } );
     a =$("#lbo ul li").length;//获取id为lbo下面ul下面LI的标签个数
    var CurrentIndex;//当前鼠标点击图片索引
     ToDisplayPicNumber = 0;// 自动播放时的图片索引
    $("#lbo div span").click(DisplayPic);//点击时候换图片
    function DisplayPic() {
// 测试是父亲的第几个儿子
        CurrentIndex = $(this).index();
// 删除所有同级兄弟的类属性
        $(this).parent().children().removeClass("CurrentNum");
// 为当前元素添加类
        $(this).addClass("CurrentNum");
// 隐藏全部图片
        var Pic = $(this).parent().parent().children("ul");

        $(Pic).children().hide();
// 显示指定图片
        $(Pic).children("li").eq(CurrentIndex).show();
    }

    setTimeout("PicNumClick()",3000);
});

function PicNumClick() {
    var g = $("div.LunBo div.LunBoNum span").eq(ToDisplayPicNumber);
    $("#lbo div span").eq(ToDisplayPicNumber).trigger("click");
    $("#lbo div span").removeClass("rn");
    $("#lbo div span").eq(ToDisplayPicNumber).addClass("rn");
    ToDisplayPicNumber = (ToDisplayPicNumber + 1) % a;
    setTimeout("PicNumClick()",3000);
}
//中部JS切换文字
$(function () {
//鼠标移到综合切换

    $('#ZonGHe,#ZonGheA').mouseover(function(){
        back(); hidetext();
        $('#ZonGheA').show();
        $('#ZonGHe span').css('background-position','-485px -111px');

    });
    //鼠标移到公告切换
    $('#GongGao,#ZonGheA').mouseover(function () {
        back(); hidetext();
        $('#GongGaoA').show();
        $('#GongGao span').css('background-position','-485px -155px');
    });
    //鼠标 移到赛事切换
    $('#SaiShi,#SaiShiA').mouseover(function () {
        back(); hidetext();
        $('#SaiShiA').show();
        $('#SaiShi span').css('background-position','-517px 0');
    });
    //鼠标移到/移走论坛切换
    $('#LunTan,#LunLanA').mouseover(function () {
        back();
        hidetext();
        $('#LunLanA').show();
        $('#LunTan span').css('background-position','-583px -44px');
    });
});

function back() {
    $('#LunTan span').css('background-position','-485px -67px');
    $('#SaiShi span').css('background-position','-387px -155px');
    $('#GongGao span').css('background-position','-387px -111px');
    $('#ZonGHe span').css('background-position','-387px -67px');
}
function hidetext() {
    $('#LunLanA').hide();
    $('#SaiShiA').hide();
    $('#ZonGheA').hide();
    $('#GongGaoA').hide();
}

//JS切换视频
function spback() {
    $("#JVido1").hide();
    $("#JVido2").hide();
    $("#JVido3").hide();
    $("#JVido4").hide();
    $("#JVido5").hide();
    $("#JVido6").hide();
}
function sphide() {
    $("#JVido li[rel='_n1']").removeClass("j-v");
    $("#JVido li[rel='_n2']").removeClass("j-v");
    $("#JVido li[rel='_n3']").removeClass("j-v");
    $("#JVido li[rel='_n4']").removeClass("j-v");
    $("#JVido li[rel='_n5']").removeClass("j-v");
    $("#JVido li[rel='_n6']").removeClass("j-v");

}
$(function () {
    //获取属性rel=—n1的li标签
    $("#JVido li[rel='_n1']").mouseover(function () {
        spback();sphide();
        $("#JVido li[rel='_n1']").addClass("j-v");
        $("#JVido1").show();
    });
    $("#JVido li[rel='_n2']").mouseover(function () {
        spback();sphide();
        $("#JVido li[rel='_n2']").addClass("j-v");
        $("#JVido2").show();
    });
    $("#JVido li[rel='_n3']").mouseover(function () {
        spback();sphide();
        $("#JVido li[rel='_n3']").addClass("j-v");
        $("#JVido3").show();
    });
    $("#JVido li[rel='_n4']").mouseover(function () {
        spback();sphide();
        $("#JVido li[rel='_n4']").addClass("j-v");
        $("#JVido4").show();
    });
    $("#JVido li[rel='_n5']").mouseover(function () {
        spback();sphide();
        $("#JVido li[rel='_n5']").addClass("j-v");
        $("#JVido5").show();
    });
    $("#JVido li[rel='_n6']").mouseover(function () {
        spback();sphide();
        $("#JVido li[rel='_n6']").addClass("j-v");
        $("#JVido6").show();
    });


});
//周免英雄
$(function () {
    $("#yy-list a").mouseover(function () {
    $(this).children("em").css("display","block");
        $(this).children("span").css("display","block");
    }).mouseout(function () {
        $(this).children("em").css("display","none");//改变当前元素下一级元素的属性
        $(this).children("span").css("display","none");
    });
});
$(function () {
    $("#JVidoss ul li").mouseover(function () {
        $(this).children("a").children(".icco-v").css("display","block");
    }).mouseout(function () {
        //$(this).children("a").children(".icco-v").css("display","none");
        $(this).find(".icco-v").css("display","none");
    });
});
$(function () {
    $("#stop li a").mouseover(function () {
        //判断当前标签内是否存在lb-dl的类  如果有返回true
       if($(this).hasClass("lb-dl")){
        $(this).css("background","#00A887");
       }else{
           $(this).css("background","#E3E3E3");
       }
    }).mouseout(function () {
        if($(this).hasClass("lb-dl")){
            $(this).css("background","#fff");
        }else{
            $(this).css("background","#fff");
        }
    });
});
//切换赛事
$(function () {
    //为赛事按钮绑定鼠标悬浮事件
   $("#ss-zx > li").mouseover(function(){
        $(this).parent().find('li').removeClass('colbox-one2');//首先清楚所有选项选中样式
        $(this).addClass('colbox-one2');//为当前选项设置选中样式
        $(this).parent().next().children().hide();//隐藏所有选项卡内容
        var i = $(this).index();
        $(this).parent().next().children('li:eq('+$(this).index()+')').show();
    });
})

//z战争学院
$(function () {
   $("#box1").click(function () {
       bk();
       $("#box1 span i").addClass("i-i");
       $("#jdms").show();
   });
    $("#box2").click(function () {
        bk();
        $("#jddd").show();
        $("#box2 span i").addClass("i-i");
    })
});
//撤销所有背景颜色and隐藏
function bk() {
    $("#box1,#box2").find("i").removeClass("i-i");
    $("#jdms,#jddd").hide();
}
function kf() {
    $("#wdlt li").removeClass("love");
    $("#fw,#lb").hide();

}
//客服专区
$(function () {
    $("#wdlt li").mouseover(function () {
        if ($(this).attr("rel")=="_n1") {
            kf();
            $(this).addClass("love");
            $("#fw").show();
        }if($(this).attr("rel")=="_n2"){
            kf();
            $(this).addClass("love");
            $("#lb").show();
        }
    })

});
//$
$(function () {
    var isOut = true;//默认在div外面
    //绑定div的鼠标悬浮和移开事件
    $("#fod1,#fod2").mouseover(function(){
        isOut = false;//当鼠标悬浮在div上面，设置isOut为false
    }).mouseout(function(){
        isOut = true;//当鼠标移开在div上面，设置isOut为true
    });
    $("#fod1").click(function () {
        //获取要显示的div的display值，判断其是否显示
        var isShow = $(this).next().css('display');
        if(isShow == 'none'){//如果其没有显示
            $(this).next().show();//则让其显示
        }else{//否则其显示了，则让其隐藏
            $(this).next().hide();
        }
    });
    //给外面的div绑定点击事件
    $('.wrapss').click(function(){
        if(isOut == true){//如果isOut为true，即鼠标在外面点击
            $("#fod2").hide();//则隐藏想要显示的div
        }
    });
});
