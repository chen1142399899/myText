/**
 * Created by chenbo on 2017/4/26.
 */

/*
$(function () {
   $("#commentForm").validate({
       rules:{
           username:{required:true,minlength:2}
               ,email:{
        required:true, email:true
    },url:"url",comment:"required",
           valcode:{formula:"8"}
       }
   });
});*/

 $(function () {
     $("#commentForm").validform();
 });


// $(function(){
//     //$(".registerform").Validform();  //就这一行代码！;
//
//     var demo=$("#commentForm").Validform({
//         //指明是哪一表单需要验证,名称需加在form表单上;
//         tiptype:3, //tiptype可以为1、2 和 自定义函数。2 表示右侧提示。
//         label:".label",
//         showAllError:true,
//         datatype:{
//             "zh1-6":/^[\u4E00-\u9FA5\uf900-\ufa2d]{1,6}$/,
//             "Aa1":/^[A-Za-z0-9]+$/
//         },
//         ajaxPost:true
//     });
//
//     //通过$.Tipmsg扩展默认提示信息;
//     //$.Tipmsg.w["zh1-6"]="请输入1到6个中文字符！";
//     demo.tipmsg.w["zh1-6"]="请输入1到6个中文字符！";//可以自定义一些消息提示,zh1-6是自定义的datatype
// //绑定验证规则
//     demo.addRule([{
//         ele:".required:eq(0)",
//         datatype:"zh1-6" //验证规则
//         // ajaxurl:"ajax_post.php?/checkname/name=$_GET['name']"//可以写方法检测中文名是否已经存在
//     },
//         {
//             ele:".required:eq(1)",
//             datatype:"*6-10",
//             errormsg:"输入字母"//验证格式不符时出现的提示信息
//
//         },
//         {
//             ele:".required:eq(2)",
//             datatype:"*6-10",
//             recheck:"password"
//         },{
//             ele:"input:radio:first",
//             datetype:"*"
//         },{
//             ele:"#laji",
//             datetype:"url",
//             errormsg:"输入正确的网址"
//         }
//         ,{
//             ele:":checkbox:first",
//             datetype:"*"
//         }
//     ]);
//
// });
