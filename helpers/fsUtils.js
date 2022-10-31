const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);  //read promise

const writeToFile = (destination, content) => {
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => {
        err ? console.error(err) : console.info(`Data was written ${destination}`)
    });
};

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const selection = JSON.parse(data);
            selection.push(content);
            writeToFile(file, selection);
        }
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend };