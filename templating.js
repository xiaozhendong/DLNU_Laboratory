/**
 * Created by coder on 16-10-17.
 */
const nunjucks = require("nunjucks");
var createEnv = function (path, opts) {
    var
        autoescape = opts.autoescape && true,//自动填充
        noCache = opts.onCache || false,//是否使用缓存 因为读取模板是件耗时操作 所以在真正投入使用的时候需要我们使用缓存
        watch = opts.watch || false,//watch开启当输入改变时模板改变
        throwOnUndefined = opts.throwOnUndefined || false,//当变量为null时将会抛出异常
        env =new  nunjucks.Environment(new nunjucks.FileSystemLoader(path, {//读取指定目录下的模板
            noCache: noCache,
            watch: watch
        }), {autoescape: autoescape, throwOnUndefined: throwOnUndefined});
    if (opts.filters){
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
};


function templating(path, opts) {
    var env = createEnv(path, opts);
    return async (ctx, next) => {
        ctx.render = function (view, model) {
            ctx.response.body = env.render(view,Object.assign({}, ctx.state || {}, model || {}));
            ctx.response.type = 'text/html';
        };
        await next();
    };
}
module.exports=templating;
