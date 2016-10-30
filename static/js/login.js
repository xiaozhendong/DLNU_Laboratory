/**
 * Created by coder on 16-10-21.
 */
var set_center = function () {
    var div_height = $("#Whole_form").height() / 2;
    var window_hight = $(window).height() / 2;
    var bar = $("#serive-bar").height();
    var margin_distance = window_hight - div_height - bar;
    $("#Whole_form").css("margin-top", margin_distance);
    var the_login_tip_width=$("#the_login_row").width();
    $("#login_tip_container").css({position:"absolute",width:the_login_tip_width,height:"23px"});
};

var set_buttom_bar_center = function () {
    var get_buttom_bar_heigh = $("#bottom_bar").height();
    var get_bar_text_center = $("#bar_text_buttom").height();
    var set_bar_height = get_buttom_bar_heigh - get_bar_text_center;
    $("#ract_bar").css("height", set_bar_height);
};


var check_login_id = function () {
    var login_id = $("#login_id").val();
    var password=$("#login_password").val();
    var password_re=/^\w{6,20}$/;
    var id_re = /^\d{10}$/;
    if (!id_re.test(login_id)) {
        $("#login_tip").css("color","red");
        $("#login_tip").text("请输入10位的学工号").show(100);
        $("#login").attr("disabled", "disabled");
    }else {
        if (!password_re.test(password)){
            $("#login_tip").text("请输入6-20位的数字字母密码").show(100);
            $("#login").attr("disabled", "disabled");
        }else {
            $("#login_tip").hide(100);
            $("#login").removeAttr("disabled");
        }
    }

};

var check_password=function () {
    var password=$("#login_password").val();
    var login_id = $("#login_id").val();
    var password_re=/^\w{6,20}$/;
    var id_re = /^\d{10}$/;
    if (!password_re.test(password)){
        if (!id_re.test(login_id)){
            $("#login_tip").text("请输入10位的学工号").show(100);
            $("#login").attr("disabled", "disabled");
        }else {

            $("#login_tip").text("请输入6-20位的数字字母密码").show(100);
            $("#login").attr("disabled", "disabled");
        }
    }else {
        if (!id_re.test(login_id)){
            $("#login_tip").text("请输入10位的学工号").show(100).shake();
            $("#login").attr("disabled", "disabled");
        }else {
            $("#login").removeAttr("disabled");
            $("#login_tip").hide(100);
        }
    }
};



$.fn.shake =function(){

    for(var i=1;i<=3; i++){
        this.animate({marginTop:5*i},50);
        this.animate({marginTop:0},50);
    }
    return this;
};

$(function () {
    set_center();
    set_buttom_bar_center();

    $("#login").attr("disabled", "disabled");
    $("#login_tip").css("color","red");

    $("#login_id").keyup(function () {
        check_login_id();
    });
    $("#login_password").keyup(function () {
        check_password()
    });

    $("#login_id").blur(function () {
        $("#login_tip_container").shake();
    });
});

$(window).resize(function () {
    set_center();
    set_buttom_bar_center();

});