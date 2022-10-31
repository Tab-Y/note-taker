const notes = require('express').Router();                                          // route
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');              // read and create files
const uuid = require('../helpers/uuid');                                            // unique id

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));        //reads the database
});

notes.post('/', (req, res) => {
    
})