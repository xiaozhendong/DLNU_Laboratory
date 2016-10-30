/**
 * Created by coder on 16-10-17.
 */


var Labor_Info=async (ctx,next)=> {//应当注意书写ctx和next两个参数  router的get和post会将请求和回应对象通过回调添加到参数上  ctx绑定渲染的方法


    ctx.render('abstract/LabInfo.html',{navbar_name:"实验室梗概"});


};



module.exports={
    "GET /Labor_Info":Labor_Info
};