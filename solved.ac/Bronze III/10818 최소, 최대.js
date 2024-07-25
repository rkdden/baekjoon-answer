const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const numList = lineList[1].split(' ').map((t) => parseInt(t));

    const max = Math.max(...numList);
    const min = Math.min(...numList);
    console.log(`${min} ${max}`);

    process.exit();
});
