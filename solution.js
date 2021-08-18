const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    if (err) {
        console.log('File not found.');
    }

    // Start timer
    console.time('Timer');

    // Solution
    const arr = data.toString().split('');
    let floor = 0;

    for (let i of arr) {
        if (i == '(')
            floor++;
        
        if (i == ')')
            floor--;
    }

    // End timer
    console.log(floor);

    console.timeEnd('Timer');
})