const fs = require('fs');

function part1() {
    fs.readFile('./input.txt', (err, data) => {
        if (err) {
            console.log('File not found.');
        }

        // Start timer
        console.time('Timer');

        // Solution
        const arr = data.toString().split('');
        let floor = 0;
        let basement = false;

        for (let [i, direction] of arr.entries()) {
            if (direction === '(')
                floor++;
            
            if (direction === ')') {
                floor--;

                if(basement === false && floor === -1){
                    basement = true;
                    part2(i + 1);
                }           
            }
        }
        
        // Result
        console.log('The directions says that Santa should go to floor:', floor);

        // End timer
        console.timeEnd('Timer');
    })
}

function part2(index) {
    console.log('Santa entered the basement for the first time at position:', index)
}

part1();