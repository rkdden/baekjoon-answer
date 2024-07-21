const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    for (let i = 1; i < lineList.length; i++) {
        const [A, B] = lineList[i].split(' ').map((t) => parseInt(t));
        console.log(A + B);
    }
    process.exit();
});
