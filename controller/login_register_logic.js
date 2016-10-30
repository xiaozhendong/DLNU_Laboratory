/**
 * Created by coder on 16-10-21.
 */
//用来处理登录逻辑
const User = require("../models/user");
var login=async(ctx, next) =>{

    var id=ctx.request.body.login_id;
    var password=ctx.request.body.login_password;
    var user_msg=await User.findById(id);

    if (user_msg===null){
        ctx.response.body = {
            su: false, msg: '您输入的账户不存在'
        };
    }else {
        if (password === user_msg.dataValues.Password) {

            ctx.session[id]=password;//在客户端存储信息  待商榷
            ctx.cookies.set("userid",id);
            ctx.response.body = {
                su: true, msg: "登录成功"
            };



        } else {
            ctx.response.body = {
                su: false, msg: '您输入的账户或密码错误'
            };


        };
    }
    ctx.response.type = 'json';
    await next();

};


var register = async(ctx, next) => {
    var type = ctx.request.body.form_type;

    if (type !== "教师") {
        ctx.response.body = {
            su: false, msg: '暂时不支持学生注册'
        };
    } else {
        var id = ctx.request.body.form_id || "";
        var password = ctx.request.body.form_password[0] || "";
        var phone = ctx.request.body.form_telephone || "";
        var e_mail = ctx.request.body.form_email || "";
        var id_exit=await User.findById(id);

        if (id_exit === null) {
          await  User.create({
                UserId: id,
                UserType: false,
                Password: password,
                TelephoneNumber: phone,
                Email: e_mail

            }).then(function (p) {
               /* console.log('created.' + JSON.stringify(p));*/
                ctx.response.body = {
                    su: true, msg: '注册成功'
                };

            }).catch(function (err) {
                ctx.response.body = {
                    su: false, msg: '注册失败, 请重试'
                };
            });
        } else {
            ctx.response.body = {
                su: false, msg: '注册失败，用户已存在'
            };
        }
        ctx.response.type = 'json';
    }
      
    await next();

};


//登出
var loginout=async (ctx,next)=>{
    var id=ctx.cookies.get("userid");
    ctx.session[id]={};
    var id=ctx.cookies.set("userid",null);
    ctx.render("LoginAndSignin/Logout.html",{});
    await next();
};


module.exports = {
    "POST /register": register,
    "POST /login":login,
    "GET /loginout":loginout
};
