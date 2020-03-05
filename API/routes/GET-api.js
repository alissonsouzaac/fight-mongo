const express = require('express');
const mongoose = require('mongoose');
const fight = require('../model/fight');
const router = express.Router();

router.route('/:id').get((req,res) => {
	const _id = req.params.id;

	fight.fundOne({_id}, (err,fight) => {
		if(err){
			res.status(400).json(err);
		}
		if (!fight) {
			res.status(404).json({ message : "Não encontrado"});
		}
		res.json(fight);
	});
});

module.exports = router;