const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const [n, m] = lineList[0].split(' ').map(BigInt);

    const a = (n + m).toString();

    console.log(a);
    process.exit();
});