/**
 * Created by chenbo on 2017/6/1.
 */
function ajax(data){
    //data={data:"",dataType:"xml/json",type:"get/post"，url:"",asyn:"true/false",success:function(){},failure:function(){}}

    //data:{username:123,password:456}
    //data = 'username=123&password=456';
    var xhr=null;
    try{
        xhr = new XMLHttpRequest();
    }catch (e){
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    };
    var type=data.dataType=="get"?"get":"post";
    var url="";
    if(data.url){
        url=data.url;
        if(type=="get"){
            url+="?"+data.data+ "&_t="+new Date().getTime();
        }
    };
    var lfg=data.lfg=="true"?"true":"false";

        xhr.open(type,url,lfg);
        if(type=="get"){
            xhr.send(null);
        }else if(type=="post"){
            //post 表单数据编码
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(data.data);
        }

        xhr.onreadystatechange=function () {
            if(this.readyState==4){
                if(this.status==200){
                    //typeof 判断参数是什么类型的示例
                    //typeof 判断是什么类型
                    if(typeof data.success=="function"){
                        var d=data.dataType=="xml"?xhr.responseXML:xhr.responseText;
                        data.success(d);
                    }
                }else{
                    if(typeof data.failure=="function"){
                        data.failure();
                    }
                }
        }
    }

}
