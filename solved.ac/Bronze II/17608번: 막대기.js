const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const count = parseInt(lineList.shift());
    let answer = 0;
    let currentHighest = 0;
    for (let i = lineList.length - 1; i >= 0; i--) {
        const current = parseInt(lineList[i]);
        if (currentHighest === 0 || currentHighest < current) {
            currentHighest = current;
            answer++;
        }
    }
    console.log(answer);
    process.exit();
});
