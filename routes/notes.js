const notes = require('express').Router();                                          // route
const { readFromFile, readAndAppend, readingFile, read, writeToFile } = require('../helpers/fsUtils');              // read and create files
const uuid = require('../helpers/uuid');                                            // unique id

notes.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));        // reads the database
});

notes.post('/', (req, res) => {                                                     // posts new notes
    const { title, text } = req.body;
    console.log(req.body);
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
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
    const target = req.params.id


    read('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            throw console.error(err);
        } else {
            const notes = JSON.parse(data);
            for (let i=0; i<notes.length; i++){
                if (notes[i].id === target){
                    notes.splice([i], 1);
                    writeToFile('./db/db.json', notes);
                };
            };
            res.json('notes updated');
        }
    }) 
})
module.exports = notes;