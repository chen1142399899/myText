/**
 * Created by chenbo on 2016/6/1.
 */

/*鼠标放上去切换背景图*/
$(function () {
    $("#spzx").mouseover(function () {
        $("#spzx").css("background-position","0 -110px");
    }).mouseout(function () {
        $("#spzx").css("background-position","0 0")
    })

});
