/**
 * Created by coder on 16-10-17.
 */
var Labor_std_login = async(ctx, next)=> {

    ctx.render("LoginAndSignin/Login.html", {
        title: "学生登录",
        login_type: "学生登录",
        switch_login: "教师登录",
        login_des: "  登陆后您将能够选择实验器材，查看实验器材使用情况",
        id:"学号",
        id_tip:"请输入学号"
    })
};

var Labor_teacher_login = async (ctx, next) =>{
    /*ctx.render("Login.html",{title:"学生登录"})*/

    ctx.render("LoginAndSignin/Login.html", {
        title: "教师登录",
        login_type: "学生登录",
        switch_login_href:"#",
        switch_login: "学生登录",
        login_des: "  登陆后您将能够选择实验器材，查看实验器材使用情况",
        tip_switch:"none"//这个属性控制密码和用户名id输入合法提示  初次进入时被设置为不可见
    })
};

var Labor_signin = async (ctx, next) =>{
    ctx.render("LoginAndSignin/SignIn.html", {
        title: "注册",
        switch_login: "教师登录",
        switch_login_href:"http://localhost/Labor_teacher_login",

        signin_tip_switch:"none"
    });
};


var Labor_suggestion =async(ctx, next) =>{

};

var Labor_aboutus = async(ctx, next)=> {

};
module.exports = {
    "GET /Labor_std_login": Labor_std_login,
    "GET /Labor_teacher_login": Labor_teacher_login,
    "GET /Labor_signin": Labor_signin,
    "GET /Labor_suggestion": Labor_suggestion,
    "GET /Labor_aboutus": Labor_aboutus
};