var express     = require('express');
var bodyParser  = require('body-parser');
var API         = require('./src/api.js');
var app         = express();
var port        = process.env.PORT || 3000;
var api         = new API();

app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.all('*', function(req,res,next){
    console.log('Logged In!'); 
    next();
});

app.get('/', function(req, res, next){
    res.send('<!doctype html> <html><head><link href=assets/style.css rel=stylesheet><title>Daniel Shamama</title></head><body>Hello, It\'s me.</body></html>');
    res.end();
});

app.get('/getAllExcellenceStudent', function(req, res, value){
    res.json(api.getAllExcellenceStudent());
});

app.get('/getStudentByID/:id', function(req, res, value){
    res.json(api.getStudByID(req.params.id));
});

app.get('/getStudentByYear/:year', function(req, res, value){
    res.json(api.getStudentByYear(req.params.year));
});

app.listen(port);
console.log("connected to port " + port);
