const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const [A, B, C] = lineList;
    console.log(parseInt(A) + parseInt(B) - parseInt(C));
    console.log(parseInt(A + B) - parseInt(C));
    process.exit();
});