const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const number = lineList.reduce((acc, cur) => {
        return acc * parseInt(cur);
    }, 1);

    const obj = {};
    for (let i = 0; i < 10; i++) {
        obj[i.toString()] = 0;
    }

    [...number.toString()].forEach((numStr) => {
        obj[numStr]++;
    });

    for (const [key, value] of Object.entries(obj)) {
        console.log(value);
    }
    process.exit();
});
