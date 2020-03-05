const express = require('express');
const mongoose = require('mongoose');
const fight = require('../model/fight');
const router = express.Router();

router.route('/:id').delete((req,res) => {
	const _id = req.params.id;

	fight.findOneAndRemove({ _id }, (err, fight) => {
		if (err){
			res.status(400).json(err);
		}
		if (!fight) {
			res.status(404).json({ message: 'Lutador não encontrado'});
		}
		res.json({ message : 'Lutador ${fight._id} deletado'});
	});
});

module.exports = router;