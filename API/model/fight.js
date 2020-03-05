const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FightSchema = new Schema({
	nome_lutador : { type : String, require: true},
	birth_lutador : { type : String, require: true},
	height : { type: String, require: true},
	size : {type: String, require: true}
});

module.exports = mongoose.model('Fight', FightSchema);