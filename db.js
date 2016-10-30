/**
 * Created by coder on 16-10-25.
 */
//这个js用于封装sequelize  自动添加
const Sequelize = require("sequelize");
const config = require("./config");
const uuid = require("node-uuid");//用于产生随机id
const ID_TYPE = Sequelize.STRING(50);
const  TYPES=["STRING","INTEGER","BIGINT","TEXT","DOUBLE","DATEONLY","BOOLEAN"];

//产生id
function generateId() {
    return uuid.v4();
}

//初始化sequelize
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        min: 0,
        max: 5,
        idle: 10000
    }
});

//定义模型  id createdAt updateAt version 字段自动添加 并在添加值之后
function defineModel(name, attributes) {//可修改同时设置默认项
    var attrs = {};//将所有的设置项转移到这
    for (let key in attributes) {
        let value = attributes[key];//value里包含了字段大小 类型 等配置信息
        if (typeof value === "object" && value['type']) {//当我们需要对设置项进行多项设置时  就会使得设置项变为object对象 所以才需要这一步
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            }
        }
    }

    attrs.id={
        type:ID_TYPE,
        allowNull:false
    };

    attrs.createdAt={
        type:Sequelize.BIGINT,
        allowNull:false
    };

    attrs.updatedAt={
        type:Sequelize.BIGINT,
        allowNull:false
    };

    attrs.version={
        type:Sequelize.BIGINT,
        allowNull:false
    };


    return sequelize.define(name, attrs, {//这里id 和创始和更新都会自动加上
        tableName: name,
        timestamps: false,
        hooks:{
            beforeValidate:function (obj) {//这个是个事件响应
                let now =Date.now();
                if (obj.isNewRecord){
                    if (!obj.id){
                        obj.id=generateId();
                    }
                    obj.createdAt=now;
                    obj.updatedAt=now;
                    obj.version=0;
                }else {
                    obj.updatedAt=now;
                    obj.version++;

                }
            }
        }
    });
    
}

var exp={
    defineModel:defineModel,
    sync:()=>{
        "use strict";
        if (process.env.NODE_ENV!== 'production'){
            sequelize.sync({force:true})
        }else {
            throw new Error('Cannot sync() when NODE_ENV is set to \'production\'.')
        }
    }
};

for(let Type of TYPES){
    exp[Type]=Sequelize[Type];
}

exp.ID=ID_TYPE;
exp.generateId=generateId;
module.exports=exp
