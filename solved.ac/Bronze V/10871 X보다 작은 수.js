const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const [N, X] = lineList[0].split(' ').map((t) => parseInt(t));
    const answer = [];

    lineList[1].split(' ').forEach((t) => {
        if (parseInt(t) < X) {
            answer.push(parseInt(t));
        }
    });

    console.log(answer.join(' '));
    process.exit();
});
