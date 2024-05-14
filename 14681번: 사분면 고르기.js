const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const [x, y] = lineList.map((s) => parseInt(s));
    if (x < 0 && 0 < y) {
        console.log(2);
    } else if (x < 0 && y < 0) {
        console.log(3);
    } else if (0 < x && 0 < y) {
        console.log(1);
    } else {
        console.log(4);
    }
    process.exit();
});