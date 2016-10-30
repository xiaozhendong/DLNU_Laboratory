/**
 * Created by coder on 16-10-17.
 */

//用来绑定路由
const fs = require("fs");
const path = require("path");
function addController(router) {
    var dir_name = path.resolve('.');
    var files = fs.readdirSync(dir_name + "/controller");
    var js_files = files.filter((f) => {
        return f.endsWith(".js");
    }, files);
    for (var the_f of js_files) {//因为filter返回的是以文件名为集合的数组  故用of in得到的时索引
        let mapping = require(dir_name + "/controller/" + the_f);

        addMapping(router, mapping)
    }
return router.routes();
}

function addMapping(router, mapping) {
    for(var url in mapping){//for...in循环会遍历一个object所有的可枚举属性。
        // for...of语法是为各种collection对象专门定制的，并不适用于所有的object.
        //这里需要的是URL是他的名字
        if (url.startsWith("GET ")){
            let get_router_path=url.substring(4);
            router.get(get_router_path,mapping[url]);
            console.log(`get to ${url} is regesiter`)
        }else if (url.startsWith("POST ")){
            let post_router_path=url.substring(5);
            router.post(post_router_path, mapping[url]);
            console.log(`post to ${post_router_path} is regesiter`)
        } else {
            console.log(`the url(${url}) is invaild`)
        }
    }

};

module.exports=addController;