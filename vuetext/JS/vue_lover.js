/**
 * Created by chenbo on 2017/5/5.
 */
var ss={
    msg:"我是一个好人"
};
var vue=new Vue({
    //ID选择器

    // el:"#app",
    //元素名称选择器
    // el:`div`,
    //类选择器
    el:".app1",
    data:ss
});
ss.msg="我是不是你最疼爱的人";
// 是单向绑定的数据 视图改变不会改变模型的属性
// 模型的改变会改变视图

var cha_zhi={
  id:"a",
    by:'green',
    cl:"#ff7300",
    content:'内容'
};

var cha_zhi1=new Vue({
   el:'.cha-zhi' ,
    data:cha_zhi
});
//加*屏蔽更改 单次传值
// {{*}}
cha_zhi.id="b";