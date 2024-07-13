const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    let answer = 0;
    lineList[1].split(' ').forEach((val) => {
        if (val === lineList[2]) {
            answer++;
        }
    });
    console.log(answer);
    process.exit();
});
