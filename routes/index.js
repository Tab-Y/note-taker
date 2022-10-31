const express = require('express');
const notesRouter = require('./notes');     //imports route
const app = express();

// list for if there were more routes to other pages ** for increased modularization
app.use('/notes', notesRouter);             //guides to notes router for direction

module.exports = app;