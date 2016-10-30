/**
 * Created by coder on 16-10-26.
 */
//建立与用户信息表的
const db=require("../db");

module.exports=db.defineModel("users",{
    UserType: db.BOOLEAN,//字段名应该与表头名一至
    UserId: {
        type: db.STRING(20),
        primaryKey: true
    },
    Password: db.STRING(100),
    TelephoneNumber: db.STRING(12),
    Email: db.STRING(50)
});