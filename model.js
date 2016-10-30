/**
 * Created by coder on 16-10-26.
 */
//自动化读取models文件夹里所有的模型
const fs = require("fs");
const path = require("path");
const db = require("./db");

var __dirname = path.resolve(".");

var files = fs.readdirSync(__dirname + "/models");

let js_files = files.filter(function (f) {
    return f.endsWith(".js");
}, files);

module.exports={};

//对models中的映射模型  自动的通过这个模块export
for(let js_f of js_files){
    let name=js_f.substring(0,js_f.length-3);
    module.exports[name]=require(dirname+"/models/"+js_f);
}

module.exports.sync=()=>{
    db.sync();
};