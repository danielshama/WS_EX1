"use strict";

var fs              = require('fs');
const DATA_PATH     = "./src/data/students.json";

class API{
    constructor(){
        this.readJsonFileToArr = function(){
            var data = fs.readFileSync(DATA_PATH);
            return JSON.parse(data);
        }
    }
    
    getAllExcellenceStudent(){
        return this.readJsonFileToArr();
    }
    
    getStudByID(studentID){
        let jsonData = this.readJsonFileToArr().students;
        let student = null;
        if(Array.isArray(jsonData)){
            jsonData.forEach(function(element){
                console.log(element.id + "   " + studentID);
                if(element.id == studentID){
                    student = element;
                }
            });
        }
        return student;
    }
    
    getStudentByYear(year){
        let jsonData = this.readJsonFileToArr().students;
        let students = [];
        if(Array.isArray(jsonData)){
            jsonData.forEach(function(element){
                if(element.year == year){
                    students.push(element);
                }
            });
        }
        return { "students" : students };
    }

}

module.exports = API;