const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    lineList.pop();
    lineList.forEach((line) => {
        const [a, b] = line.split(' ').map((t) => parseInt(t));
        if (b < a) {
            console.log('Yes');
        } else {
            console.log('No');
        }
    });
    process.exit();
});