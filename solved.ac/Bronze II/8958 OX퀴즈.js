const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    for (let i = 1; i < lineList.length; i++) {
        const line = lineList[i];
        let score = 0;
        let currentScore = 0;
        for (let j = 0; j < line.length; j++) {
            const str = line[j];
            if (str === 'O') {
                currentScore++;
                score += currentScore;
            } else {
                currentScore = 0;
            }
        }
        console.log(score);
    }
    process.exit();
});
