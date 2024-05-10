const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    //입력한 값을 처리하는 코드
    lineList.push(line);
}).on('close', function () {
    const N = parseInt(lineList[0]);
    const scoreList = lineList[1].split(' ').map((t) => parseInt(t));
    const M = Math.max(...scoreList);

    const s = scoreList.reduce((acc, cur) => {
        return acc + (cur / M) * 100;
    }, 0);

    console.log(s / N);
    process.exit();
});