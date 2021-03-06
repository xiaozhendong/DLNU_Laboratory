/**
 * Created by coder on 16-10-18.
 */

var teacher_manage_home_page=async (ctx,next)=> {
    var id=ctx.cookies.get("userid");
    if(ctx.session[id]) {
        ctx.render("management/teacher_manage_home_page.html", {});
    }else {
        ctx.render("LoginAndSignin/Login.html", {
            title: "教师登录",
            login_type: "学生登录",
            switch_login: "学生登录",
            login_des: "  登陆后您将能够选择实验器材，查看实验器材使用情况",
            tip_switch:"block",//这个属性控制密码和用户名id输入合法提示  初次进入时被设置为不可见
            login_tip:"您尚未登录，请登录"
        })
    }

};

var teacher_manage_add_item=async (ctx,next)=>{

    var id=ctx.cookies.get("userid");
    if(ctx.session[id]) {
        ctx.render("management/teacher_manage_add_item.html",{});
    }else {
        ctx.render("LoginAndSignin/Login.html", {
            title: "教师登录",
            login_type: "学生登录",
            switch_login: "学生登录",
            login_des: "  登陆后您将能够选择实验器材，查看实验器材使用情况",
            tip_switch:"block",//这个属性控制密码和用户名id输入合法提示  初次进入时被设置为不可见
            login_tip:"您尚未登录，请登录"
        })
    }
};

var teacher_manage_add_Lab_project_item=async (ctx,next)=>{
    var id=ctx.cookies.get("userid");
    if(ctx.session[id]) {
        ctx.render("management/teacher_manage_add_Lab_project_item.html",{});
    }else {
        ctx.render("LoginAndSignin/Login.html", {
            title: "教师登录",
            login_type: "学生登录",
            switch_login: "学生登录",
            login_des: "  登陆后您将能够选择实验器材，查看实验器材使用情况",
            tip_switch:"block",//这个属性控制密码和用户名id输入合法提示  初次进入时被设置为不可见
            login_tip:"您尚未登录，请登录"
        })
    }
};

var teacher_manage_add_Labo_info=async (ctx,next)=>{

    var id=ctx.cookies.get("userid");
    if(ctx.session[id]) {
        ctx.render("management/teacher_manage_add_Labo_info.html",{});
    }else {
        ctx.render("LoginAndSignin/Login.html", {
            title: "教师登录",
            login_type: "学生登录",
            switch_login: "学生登录",
            login_des: "  登陆后您将能够选择实验器材，查看实验器材使用情况",
            tip_switch:"block",//这个属性控制密码和用户名id输入合法提示  初次进入时被设置为不可见
            login_tip:"您尚未登录，请登录"
        })
    }
};

var teacher_manage_add_description=async (ctx,next)=> {


    var id=ctx.cookies.get("userid");
    if(ctx.session[id]) {
        ctx.render("management/teacher_manage_add_description.html",{});
    }else {
        ctx.render("LoginAndSignin/Login.html", {
            title: "教师登录",
            login_type: "学生登录",
            switch_login: "学生登录",
            login_des: "  登陆后您将能够选择实验器材，查看实验器材使用情况",
            tip_switch:"block",//这个属性控制密码和用户名id输入合法提示  初次进入时被设置为不可见
            login_tip:"您尚未登录，请登录"
        })
    }

};

var teacher_manage_upload_detail=async (ctx,next)=> {

    var id=ctx.cookies.get("userid");
    if(ctx.session[id]) {
        ctx.render("management/teacher_manage_upload_detail.html",{});
    }else {
        ctx.render("LoginAndSignin/Login.html", {
            title: "教师登录",
            login_type: "学生登录",
            switch_login: "学生登录",
            login_des: "  登陆后您将能够选择实验器材，查看实验器材使用情况",
            tip_switch:"block",//这个属性控制密码和用户名id输入合法提示  初次进入时被设置为不可见
            login_tip:"您尚未登录，请登录"
        })
    }
};

var teacher_manage_add_project=async(ctx,next)=>{
    var id=ctx.cookies.get("userid");
    if(ctx.session[id]) {
        ctx.render("management/teacher_manage_add_project.html",{});
    }else {
        ctx.render("LoginAndSignin/Login.html", {
            title: "教师登录",
            login_type: "学生登录",
            switch_login: "学生登录",
            login_des: "  登陆后您将能够选择实验器材，查看实验器材使用情况",
            tip_switch:"block",//这个属性控制密码和用户名id输入合法提示  初次进入时被设置为不可见
            login_tip:"您尚未登录，请登录"
        })
    }
};

var teacher_manage_add_Labor_member=async (ctx,next)=>{
    var id=ctx.cookies.get("userid");
    if(ctx.session[id]) {
        ctx.render("management/teacher_manage_add_Labor_member.html",{});
    }else {
        ctx.render("LoginAndSignin/Login.html", {
            title: "教师登录",
            login_type: "学生登录",
            switch_login: "学生登录",
            login_des: "  登陆后您将能够选择实验器材，查看实验器材使用情况",
            tip_switch:"block",//这个属性控制密码和用户名id输入合法提示  初次进入时被设置为不可见
            login_tip:"您尚未登录，请登录"
        })
    }
};
module.exports={
  "GET /teacher_manage_home_page":teacher_manage_home_page,
    "GET /teacher_manage_add_description":teacher_manage_add_description,
    "GET /teacher_manage_upload_detail":teacher_manage_upload_detail,
    "GET /teacher_manage_add_item":teacher_manage_add_item,
    "GET /teacher_manage_add_Lab_project_item":teacher_manage_add_Lab_project_item,
    "GET /teacher_manage_add_Labo_info":teacher_manage_add_Labo_info,
    "GET /teacher_manage_add_project":teacher_manage_add_project,
    "GET /teacher_manage_add_Labor_member":teacher_manage_add_Labor_member
};