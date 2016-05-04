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
    
    //params: none
    //return: json array with all students
    getAllExcellenceStudent(){
        return this.readJsonFileToArr();
    }
    
    //params: student id (number)
    //return: json object with specific student
    getStudByID(studentID){
        let jsonData = this.readJsonFileToArr().students;
        let student = null;
        if(Array.isArray(jsonData)){
            //run on all the students and search for specific id
            jsonData.forEach(function(element){
                console.log(element.id + "   " + studentID);
                if(element.id == studentID){
                    student = element;
                }
            });
        }
        return student;
    }
    
    //params: year of study (number)
    //return: json array with the relevant students
    getStudentByYear(year){
        let jsonData = this.readJsonFileToArr().students;
        let students = [];
        if(Array.isArray(jsonData)){
            //run on all the students and search for the relevante year
            //puts all the relevante students in array
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