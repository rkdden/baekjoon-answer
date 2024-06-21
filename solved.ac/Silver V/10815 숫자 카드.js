const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const [N, sCardString, M, numberString] = lineList;
    const numberSet = new Set();
    sCardString.split(' ').forEach((n) => {
        numberSet.add(BigInt(n));
    });
    let answer = ``;
    numberString.split(' ').forEach((n) => {
        if (numberSet.has(BigInt(n))) {
            answer += `1 `;
        } else {
            answer += `0 `;
        }
    });
    console.log(answer.trim());

    process.exit();
});