/**
 * Created by chenbo on 2017/5/9.
 */
new Vue({
    el:".container",
    data:{
        //显示的条数
        limtNumbar:3,
        addDzh:[],
        // 选中的下标
        cloentRset:0,
        shappMed:1
    },
    //函数过滤器 计算属性
    //实时的计算
    computed:{
        falistAddress:function () {
                //截取0到3个 返回全新的数组
                return this.addDzh.slice(0,this.limtNumbar);
        }
    },
    mounted:function () {
        //这样可以，nextTick里面的代码会在DOM更新后执行
        this.$nextTick(function () {
            this.getAddList();
        })
    },
methods:{
        getAddList:function () {
            var _this=this;
            this.$http.get("./data/address.json",{"id":123}).then(function (item) {
                var res=item.data;
                //请求状态判断 ==1成功
                if(res.status==1){
                    _this.addDzh=res.result;

                }

            });
        },
    //点击显示全部
lodShow:function () {
            if(this.limtNumbar==3){
    this.limtNumbar=this.addDzh.length;
            }else{
                this.limtNumbar=3;
            }

},
    //设为默认
    setDefilt:function (itemId) {

        this.addDzh.forEach(function (value,index) {
            if(value.addressId==itemId){
                value.isDefault=true;

            }else{

                value.isDefault=false;

            }
        })
    },
    //删除功能
    shanchu:function (item) {

        var index=this.addDzh.indexOf(item);

        this.addDzh.splice(index,1);
    }
    }

//352
});

