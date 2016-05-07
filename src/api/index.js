"use strict";

var fs              = require('fs');
var mongoose        = require('mongoose');
var db              = mongoose.connect('mongodb://user:pass@ds017672.mlab.com:17672/students_ex');
var Student        = require('./student');

var conn  = mongoose.connection;

conn.on('error', function(err){
    console.log('connection error - ' + err);
});

conn.once('open', function(){
    console.log('connected to mongo!');

});

//mongoose.disconnect();

class API{
    constructor(){}
    
    //params: none
    //return: json array with all students
    getAllExcellenceStudent(callback){
        console.log('>>getAllExcellenceStudent');
        
        if(mongoose.connection.readyState){
            Student.find({},function(err,users){
                console.log('got data');
                if(err) throw err;
                callback(users);
                console.log('<<getAllExcellenceStudent');
            });
        }
    }
    
    //params: student id (number)
    //return: json object with specific student
    getStudByID(studentID, callback){
        console.log('>>getStudByID');
        
        if(mongoose.connection.readyState){
            Student.find({id: studentID} ,function(err,user){
                console.log('got data');
                if(err) throw err;
                callback(user);
                console.log('<<getStudByID');
            });
        }
    }
    
    //params: year of study (number)
    //return: json array with the relevant students
    getStudentByYear(year, callback){
        console.log('>>getStudentByYear');
        
        if(mongoose.connection.readyState){
            Student.find({year: year} ,function(err,users){
                console.log('got data');
                if(err) throw err;
                callback(users);
                console.log('<<getStudentByYear');
            });
        }
    }

}

module.exports = API;