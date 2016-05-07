var express     = require('express');
var bodyParser  = require('body-parser');
var API         = require('./src/api/');
var app         = express();
var port        = process.env.PORT || 3000;
var api         = new API();

app.use('/assets', express.static(__dirname + '/public'));

app.all('*', function(req,res,next){
    console.log('Logged In!'); 
    next();
});

app.get('/', function(req, res, next){
    res.send('<!doctype html> <html><head><link href=assets/style.css rel=stylesheet><title>Daniel Shamama</title></head><body>Hello, It\'s me.</body></html>');
    res.end();
});

// getAllExcellenceStudent Method:
// params: none
// response: all students in json array
app.get('/getAllExcellenceStudent', function(req, res, value){
    api.getAllExcellenceStudent(function(data){
        res.json(data);
    })
});

// getStudentByID Method:
// params: id (number)
// response: json object
app.get('/getStudentByID/:id', function(req, res, value){
    api.getStudByID(req.params.id,function(data){
        res.json(data);
    });
    
});

// getStudentByYear Method:
// params: year (number)
// response: students in array
app.get('/getStudentByYear/:year', function(req, res, value){
    api.getStudentByYear(req.params.year, function(data){
        res.json(data);
    })
});

app.listen(port);
console.log("connected to port " + port);
