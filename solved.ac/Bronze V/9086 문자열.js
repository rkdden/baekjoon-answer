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
        console.log(`${line[0]}${line[line.length - 1]}`);
    }
    process.exit();
});
