'use strict';

var students =[];

angular.module('studentsApp',[])
.controller('mainController', ['$http',function($http){
    var _this = this;
    _this.msg = 'Loading...'
    _this.students = []; 
    _this.yearerror = '';
    _this.iderror = '';
    
    this.giveMeById = function(){
        //if the value is invalid or empty
        if(_this.ID == undefined || _this.ID === ''){
            _this.iderror= 'Invalid ID';
            _this.ID = '';
        } else {
             $http({
              method: 'GET',
              url: 'http://excellence-students.herokuapp.com/getStudentByID/' + _this.ID
            }).then(function successCallback(response) {
                 //clean the error msgs
                _this.iderror = '';
                _this.yearerror = '';
                 //prevent empty table
                if(response.data.length==0) {
                    _this.iderror = 'No Data';
                    _this.init();
                }else _this.students = response.data;
                _this.ID = '';
              }, function errorCallback(response) {
                _this.iderror= 'Invalid value';
              });
        }
    }
    
    this.giveMeByYear = function(){
        //if the value is invalid or empty
        if(_this.year === undefined || _this.year === ''){
            _this.yearerror= 'Invalid year';
            _this.year = '';
        } else {
            $http({
              method: 'GET',
              url: 'http://excellence-students.herokuapp.com/getStudentByYear/' + _this.year
            }).then(function successCallback(response) {
                //clean the error msgs
                _this.iderror = '';
                _this.yearerror = '';
                //prevent empty table
                if(response.data.length==0){
                    _this.yearerror = 'No Data';
                    _this.init();
                } 
                else _this.students = response.data;
                _this.year = '';
              }, function errorCallback(response) {
                _this.yearerror= 'Invalid value';
                _this.students = [];
              });
        }
        
    }
    
    this.init = function(){
        _this.title = "Loading...";
        $http({
          method: 'GET',
          url: 'http://excellence-students.herokuapp.com/getAllExcellenceStudent'
        }).then(function successCallback(response) {
            _this.students = response.data;
            if(_this.students.length==0) _this.title = "no Data";
          }, function errorCallback(response) {
            _this.title= "Unvalid value";
            _this.students = [];
          });
    }
}]);