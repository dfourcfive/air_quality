const express = require('express');
const pollutionRoute = require('./pollution.route');
const app = express.Router();


app.use('/pollution', pollutionRoute);


module.exports = app;