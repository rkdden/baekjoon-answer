const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    let maxNum = 0;
    let index = 0;
    lineList.forEach((line, i) => {
        const num = parseInt(line);
        if (maxNum < num) {
            maxNum = num;
            index = i;
        }
    });
    console.log(maxNum);
    console.log(index + 1);
    process.exit();
});
