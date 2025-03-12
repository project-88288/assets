const fs = require('fs');
const path = require('path');

const directoryPath = __dirname; // Current directory

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Error reading directory:', err);
    }
    
    console.log('Files in directory:', files);
});
