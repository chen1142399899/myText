/**
 * Created by chenbo on 2017/4/20.
 */


$(function () {

    var name = $("#TextName");
    var psd = $("#password");

    var name_a = $.trim(name.attr("value"));
    var psd_a = $.trim(psd.attr("value"));
    $("#bn").click(function () {
        //清除前面或者后面的空

        if (name_a.length == 0) {
            c();

        } else if (psd_a.length == 0) {
            a();
            d();

        }
        else {
            if (name_a == "chenbo" && psd == "chenbo520") {
                a();
                b();
                alert("登录成功" + "欢迎小可爱");
                location.href = "ZY.html";
            } else {
                a();
                b();
                alert("密码或者账号错误");
            }
        }

    });

    //元素失去焦点执行
    name.on("blur", function () {
        alert(name_a);
        if (name_a.length == 0) {
            c();
        } else {

            a();
        }
    });
    psd.on("blur", function () {
        if (psd_a.length == 0) {
            alert("A");
            d();
        } else {
            alert("b");
            b();
        }
    });
});



    function a() {
        //toggleClass  如果没这个类添加， 如果有删除
        $("#tn").html("√").removeClass("em").addClass("em1");
    }

    function b() {
        $("#pwd").html("√").removeClass("em").addClass("em1");
    }

    function c() {
        $("#tn").html("您还没有输入账号").removeClass("em1").addClass("em");
    }

    function d() {
        $("#pwd").html("您还没输入密码").removeClass("em1").addClass("em");
    }
