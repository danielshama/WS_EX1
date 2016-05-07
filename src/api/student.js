'use strict';
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	name: {type:String,required:true},
	id: {type:Number, index:1, required:true, unique:true},
	year: {type:Number, required:true},
	grade: {type:Number, required:true}
}, {collection : 'students'});

module.exports = mongoose.model('Student', userSchema);