/**
 * Created by chenbo on 2017/4/22.
 */
$(function () {

    var em_wz=$(".cenntr_ul li>img");
    em_wz.mouseover(function () {

        $(this).next().removeClass("fy").addClass("fd");
    }). mouseout(function () {
        $(this).next().removeClass("fd").addClass("fy");
    });
});

