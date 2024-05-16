const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const [x, y, w, h] = lineList[0].split(' ').map((t) => parseInt(t));
    const t1 = x < w / 2 ? x : w - x;
    const t2 = y < h / 2 ? y : h - y;
    if (t1 < t2) {
        console.log(t1);
    } else {
        console.log(t2);
    }
    process.exit();
});

