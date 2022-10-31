const notes = require('express').Router();                                          // route
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');              // read and create files
const uuid = require('../helpers/uuid');                                            // unique id

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));        // reads the database
});

notes.post('/', (req, res) => {                                                     // posts new notes
    const { title, text } = req.body;
    console.log(req.body);
    if (req.body) {
        const newNote = {
            title,
            text,
            tip_id: uuid(),
        };
        readAndAppend(newNote, './db/db.json');
        const response = {
            status: "Note saved",
            body: newNote,
        };
        res.json(response)
    } else {
        res.json('error occered')
    };
});

notes.delete('/:id', (req, res) => {
    
    
})
module.exports = notes;