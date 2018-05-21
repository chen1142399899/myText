/**
 * Created by chenbo on 2017/5/7.
 */
var vm=new Vue({
    el:"#app",
    data:{
        todaMoney:0,
        todoplase:0,
        productList:[],
        checkAllfget:false,
        delFlag:false,
        curProdect:''
    },
    //过滤器
    filters:{
        formeatMoney:function (value) {
            return "￥"+value.toFixed(2);
        }
    },
    //生命周期
    mounted:function () {
        this.cartView();
    },
    //定义事件 方法
    methods:{
        cartView:function () {
            var _this=this;
            this.$http.get("./data/cart.json",{"id":123}).then(function (res) {
                _this.todaMoney=res.data.result.totalMoney;
                _this.productList=res.data.result.productList;

            })
        },
        //+-商品
        changMoeny:function (pront,num) {
            if(num>0){
                pront.productQuentity++;
                if( pront.productQuentity>50){
                    pront.productQuentity=50;}

            }else{
                pront.productQuentity--;
                if (pront.productQuentity<1){

                    pront.productQuentity=1
                }

            }
            this.carlTodoPlase();
        },
        selectPround:function (select) {
        //    判断里面是否存在checked这个属性
            if(typeof select.checked=="undefined"){
            //    1全局注册
            //    添加checked属性 默认设置true
                Vue.set(select,"checked",true);
            //    2局部注册
            //     this.$set(select,"checked",true);
            }else{
                select.checked=!select.checked
            }
            this.carlTodoPlase();
        },
        //全选 取消全选
        checkAll:function (fget) {
            this.checkAllfget=fget;
            var _love=this;

                this.productList.forEach(function (item, index) {
                    if (typeof item.checked == "undefined") {

                        _love.$set(item, "checked", _love.checkAllfget);
                    } else {

                        item.checked = _love.checkAllfget;
                        this.todoplase = 0;
                    }
                });
                this.carlTodoPlase();

        },

    //    计算总金额
        carlTodoPlase:function () {
            var _love=this;
            this.todoplase=0;
            this.productList.forEach(function (item,index) {
                if(item.checked){
                    _love.todoplase+=item.productPrice*item.productQuentity;
                }

            })
        },
        dslei:function (item) {
          this.delFlag=true;
          this.curProdect=item;


        },
    //删除商品
        deldest:function () {

          var index=this.productList.indexOf(this.curProduct);

          this.productList.splice(index,1);
        }

    }



});
//全局过滤器
Vue.filter("moneyl",function (value,type) {
    return "￥"+value.toFixed(2)+type;
});