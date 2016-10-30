var device_charater_description=async (ctx,next)=> {

    ctx.render("device_description/device_charater_description.html",{});
};


module.exports={
  "GET /device_charater_description":device_charater_description
};