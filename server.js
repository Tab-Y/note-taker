const express = require("express");                 // npm module being used for this project
const path = require('path');                       // module for pathing 
const fsUtils = require('./helpers/fsUtils');       // core modules called into functions
const uuid = require('./helpers/uuid');             // unique user id  -  a random generated id for use within the server
const PORT = process.env.PORT || 3001;              // needed for server port in heroku or other server hosts
const app = express();

app.use(express.static('public'));                  //used public folder for client side

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html')) //targets the public folder within this repo 
);

app.listen(PORT, () => console.log(`listening at ${PORT}`));
// GIVEN a note-taking application
// WHEN I open the Note Taker               X
// THEN I am presented with a landing page with a link to a notes page          X
// WHEN I click on the link to the notes page           X
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column