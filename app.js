/**
 * Created by coder on 16-10-17.
 */
const Koa = require('koa');
var app = new Koa();
const router = require("koa-router")();
const bodyparser = require("koa-bodyparser");
const nunjucks = require('nunjucks');
const addController = require("./controllers");
const templating = require("./templating");
const session=require("koa-session-minimal");
const store=require("./store");


app.use(session({
    key:"labortory",
    store:new store()
}));

app.use(bodyparser());//添加post body解析器
app.use(templating("view", {
    noCache: false, watch: false, autoescape: true
}));//这个ctx的render方法必须在controller里的方法注册之前注册  因为控制器里有对画笔方法调用  如果在它之后则将会找不到该方法
//添加路由控制器（就是添加路由导向表）

app.use(addController(router));//使得路由控制器生效

app.listen(8080);