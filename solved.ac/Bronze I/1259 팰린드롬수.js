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
        const isSame = line === [...line].reverse().join('');
        if (isSame) {
            console.log('yes');
        } else {
            console.log('no');
        }
    });
    process.exit();
});

