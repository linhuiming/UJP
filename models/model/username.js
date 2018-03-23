var mongoose = require("mongoose");

//计划
var Schema = mongoose.Schema;

var obj = {
	username:String,
	email:String,
	password:String
}

var model = mongoose.model("userdemo",new Schema(obj));

//model 将来就可以操作 userdemos 这个集合.

module.exports = model;