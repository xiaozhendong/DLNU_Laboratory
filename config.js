/**
 * Created by coder on 16-10-25.
 */
//用于配置数据库的一些连接信息
const default_config="./config-default.js";
const overrewriting_config="./config-override.js";
const fs=require("fs");

var config=null;
console.log(`load ${default_config}`);
config=require(default_config);
try {
    if(fs.statSync(overrewriting_config).isFile()){
        console.log(`load ${overrewriting_config}`);
        config=require(overrewriting_config);
    }
}catch (err){
    console.log(`can't load ${overrewriting_config}`);
}

module.exports=config;
