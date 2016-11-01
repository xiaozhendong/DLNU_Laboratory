/**
 * Created by coder on 16-10-23.
 */

var until_page=0;
var click_count=1;
var bind_name = 'input propertychange';

var set_center = function () {
    var div_height = $("#Whole_form").height() / 2;
    var window_hight = $(window).height() / 2;
    var bar = $("#serive-bar").height();
    var margin_distance = window_hight - div_height - bar;
    $("#Whole_form").css("margin-top", margin_distance);
    var signin_tip_width=$("#signin_step").width();
    $("#signin_tip_container").css({position:"absolute",width:signin_tip_width,height:"23px"});
};
var set_buttom_bar_center = function () {
    var get_buttom_bar_heigh = $("#bottom_bar").height();
    var get_bar_text_center = $("#bar_text_buttom").height();
    var set_bar_height = get_buttom_bar_heigh - get_bar_text_center;
    $("#ract_bar").css("height", set_bar_height);
};

$("#std_or_teacher_id").focus(function () {
    $("#next").removeAttr("disabled", "disabled");
});

$(window).resize(function () {
    set_center();
    set_buttom_bar_center()
});

$(function () {
    set_center();
    set_buttom_bar_center();

    $("#signin_tip").css("color","red");
    $("#next").attr("disabled", "disabled");
    if (until_page<=0){
        $("#pre").hide();
        $("#sign").hide();
    }
});

$("#next").click(function () {
    click_count++;
    $("#step").text(click_count);

    if (until_page>=0) {
        until_page = until_page + 1;

    }else if(until_page<0||until_page>2){
        until_page = 1;

    }
    if(until_page===2){
        $("#next").css("display","none");
        $("#pre").fadeIn();
        $("#sign").css("display","");
    }else if (until_page>=1&&until_page<2){
        $("#next").fadeIn();
        $("#pre").fadeIn();
        $("#sign").css("display","none");
    }else {
        $("#next").fadeIn();
        $("#pre").fadeOut();
        $("#sign").css("display","none");
    }
    $("#next").attr("data-slide-to",until_page);
    $("#pre").attr("data-slide-to",until_page-1);

    if (signin_status!==true){
        $("#signin_tip").text("您注册的信息有误").show(100);
        $("#sign").attr("disabled", "disabled")
    }else {
        $("#sign").removeAttr("disabled");
    }
});



$("#pre").click(function () {
    $("#next").attr("data-slide-to",until_page);
    $("#pre").attr("data-slide-to",until_page-1);

    if (until_page >= 0) {
        until_page = until_page - 1;
    } else if(until_page<0||until_page>2){
        until_page = 1;

    }

    if(until_page===2){
        $("#next").css("display","none");
        $("#pre").fadeIn();
        $("#sign").css("display","");
    }else if (until_page>=1&&until_page<2){
        $("#next").fadeIn();
        $("#pre").fadeIn();
        $("#sign").css("display","none");
    }else {
        $("#next").fadeIn();
        $("#pre").fadeOut();
        $("#sign").css("display","none");
    }
    click_count--;
    $("#step").text(click_count);

});

var signin_status=false;
$("#std_or_teacher_id").bind(bind_name,function () {
    var id_re = /^\d{8}$/;
    var id = $("#std_or_teacher_id").val();
    if(!id_re.test(id)){
        $("#signin_tip").text("请输8位的学号或学工号").show(100);
        signin_status=false
    }else {
        $("#signin_tip").hide(100);
        signin_status=true;
    }
});




$("#form_password").bind(bind_name, function () {
    var password_re=/^\w{6,20}$/;
    var password=$("#form_password").val();
    if(!password_re.test(password)){
        $("#signin_tip").text("请输入6-20字母数字密码").show(100);
        signin_status=false;
    }else {
        $("#signin_tip").hide(100)
    }
});

$("#form_password_agin").bind(bind_name, function () {
    var password=$("#form_password").val();
    var password_again=$("#form_password_agin").val();
    var password_re=/^\w{6,20}$/;
    if(!password_re.test(password)){
        $("#signin_tip").text("请输入6-20字母数字密码").show(100);
        signin_status=false;
    }else {
        if (password !== password_again) {
            $("#signin_tip").text("两次密码不一致").show(100);
            signin_status=false;
        } else {
            $("#signin_tip").hide(100);
            signin_status=true;
        }

    }
});

$("#form_telephone").bind(bind_name, function () {
    var telephone_re=/^1[34578]\d{9}$/;
    var phonenumber=$("#form_telephone").val();
    if (!telephone_re.test(phonenumber)){
        $("#signin_tip").text("请输入正确的手机号").show(100);
        $("#sign").attr("disabled", "disabled")
    }else {
        $("#signin_tip").hide(100);
        $("#login").removeAttr("disabled");
    }
});

$("#form_email").bind(bind_name, function () {
    var email_re=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var email= $("#form_email").val();
    var telephone_re=/^1[34578]\d{9}$/;
    var phonenumber=$("#form_telephone").val();
    if (!telephone_re.test(phonenumber)){
        $("#signin_tip").text("请输入正确的手机号").show(100);
        $("#sign").attr("disabled", "disabled")
    }else {

        if (!email_re.test(email)) {
            $("#signin_tip").text("请输入正确的邮箱").show(100);
            $("#sign").removeAttr("disabled");
        } else {
            $("#signin_tip").hide(100);
            $("#sign").removeAttr("disabled");

        }
    }
});

$.fn.shake =function(){

    for(var i=1;i<=3; i++){
        this.animate({marginTop:5*i},50);
        this.animate({marginTop:0},50);
    }
    return this;
};