var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var moongoose = require('mongoose');
var Airplane = require('./models/airplane');
moongoose.connect('mongodb://localhost/airplanes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/airplanes', require('./controllers/airplanes'));
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);