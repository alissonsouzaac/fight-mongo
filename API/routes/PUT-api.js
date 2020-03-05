const express = require('express');
const mongoose = require('mongoose');
const fight = require('..model/fight');
const router = express.Router();

router.route('/:id').put((req, res) => {
	const _id = req.params.id;

	fight.findOneAndUpdate({_id},
		req.body,
		{new: true},
		(err, fight) => {
			if (err) {
				res.status(400).json(err);
			}
			res.json(fight);
		});
});

module.exports = router;