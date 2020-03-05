const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const uriUtil = require('mongodb-uri');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongodbUri = 'mongodb://localhost:8000/fight-test';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

app.use('/API', require('./API/routes/DELETE-api'));
app.use('/API', require('./API/routes/GET-api'));
app.use('/API', require('./API/routes/POST-api'));
app.use('/API', require('./API/routes/PUT-api'));

const hostname = 'localhost';
const port = 8000;
const server = app.listen(port, hostname, () =>{
	mongoose.connect(dbOptions, (err) => {
		if (err){
			console.log(err);
		}
		console.log('servidor rodando em http://${hostname}:${port}/');
	});
});

