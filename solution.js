const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    if (err) {
        console.log('File not found.');
    }

    console.time('Timer');

    // Code here

    console.timeEnd('Timer');
})