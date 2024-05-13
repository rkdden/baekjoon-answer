const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    //입력한 값을 처리하는 코드
    lineList.push(line);
}).on('close', function () {
    const count = parseInt(lineList[0]);
    const scoreList = lineList[1]
        .split(' ')
        .map((t) => parseInt(t))
        .sort((a, b) => a - b);
    console.log(scoreList.pop() - scoreList.shift());
    process.exit();
});