const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const N = parseInt(lineList[0]);

    for (let i = 1; i <= N; i++) {
        const line = lineList[i];
        const splitLine = line.split(' ');
        const reversedLine = splitLine.reverse();
        console.log(`Case #${i}: ${reversedLine.join(' ')}`);
    }
    process.exit();
});
