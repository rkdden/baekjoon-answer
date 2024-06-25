const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});



const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const count = lineList[0];
    const numberList = lineList[1]
        .split(' ')
        .map((t) => parseInt(t))
        .sort((a, b) => a - b);
    console.log(numberList[0] * numberList[numberList.length - 1]);

    process.exit();
});
