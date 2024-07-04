const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const a = lineList[0].length;
    const b = lineList[1].length;

    if (a < b) {
        console.log('no');
    } else {
        console.log('go');
    }
    process.exit();
});
