const express = require("express");                 // npm module being used for this project
const path = require('path');                       // module for pathing 
const routes = require('./routes/index');           // imports routing module
const fsUtils = require('./helpers/fsUtils');       // core modules called into functions
const uuid = require('./helpers/uuid');             // unique user id  -  a random generated id for use within the server
const PORT = process.env.PORT || 3001;              // needed for server port in heroku or other server hosts
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', routes);

app.use(express.static('public'));                  //used public folder for client side

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))    // targets the index page be sent and loaded
);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))    // targets the page for notes to be sent and loaded on request
});

app.listen(PORT, () => console.log(`listening at ${PORT}`));