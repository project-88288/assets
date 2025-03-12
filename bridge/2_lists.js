const fs = require('fs');
const path = require('path');

const directoryPath = __dirname; // Current directory
const outputFilePath = path.join(__dirname, 'lists.json');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Error reading directory:', err);
    }

    results = [];
    
    files.forEach(element => {
        if (element == "2_lists.js" || element == "lists.json" ) {  } else {
            results.push(element);
        }
        
    });
    
    results.push("lists.json");

    console.log('Files:', results);
    
    fs.writeFile(outputFilePath, JSON.stringify(results, null, 2), (writeErr) => {
        if (writeErr) {
            return console.error('Error writing to JSON file:', writeErr);
        }
        console.log('File list saved to lists.json');
    });
});

module.exports = directoryPath;


