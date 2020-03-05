const express = require('express');
const mongoose = require('mongoose');
const fight = require('../model/fight');
const router = express.Router();


router.route('/').post((req, res) => {
	const fight = new Figth(req.body);

	figth.save((err, fight) => {
		if(err){
			res.status(400).json(err);
		}
		res.json(fight);
	});
});

module.exports = router;