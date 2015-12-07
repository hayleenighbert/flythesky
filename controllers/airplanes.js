var express = require('express');
var Airplane = require('../models/airplane');
var router = express.Router();


router.get('/', function(req, res) {
	Airplane.find({}, function (err, airplanes) {
		if (err) return res.send(err);
		res.send(airplanes);
	});
});

router.post('/', function(req, res){
	var airplane = new Airplane(req.body);
	airplane.save(function(err){
		if(err) return res.send(err);
		res.send(airplane);
	});
});

router.get('/:id', function(req, res){
	Airplane.findById(req.params.id, function(err, airplane){
		if (err) return res.send(err);
		res.send(airplane);
	});	
});

router.put('/:id', function(req, res) {
  Airplane.findById(req.params.id, function(err, airplane) {
    if (err) return res.send({message: 'No airplane found!'});
    if (req.body.name) airplane.name = req.body.name;
    if (req.body.model) airplane.model = req.body.model;
    if (req.body.engine) airplane.engine = req.body.engine;
    if (req.body.airline) airplane.airline = req.body.airline;
    if (req.body.seats) airplane.seats = req.body.seats;
   
    airplane.save(function(err) {
      if (err) return res.send({message: 'Error occurred when editing this airplane!'});
      res.send(airplane);
    });
  });
});

router.delete('/:id', function(req, res) {
  Airplane.remove({_id: req.params.id}, function(err) {
    if (err) return res.send({message: 'No airplane found'});
    res.send({message: 'Airplane deleted!'});
  });
});

module.exports = router;