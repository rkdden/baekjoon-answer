const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const N = parseInt(lineList[0]);
    const obj = {
        STRAWBERRY: 0,
        BANANA: 0,
        LIME: 0,
        PLUM: 0,
    };
    for (let i = 1; i <= N; i++) {
        const line = lineList[i];
        const lineSplit = line.split(' ');
        const fruit = lineSplit[0];
        const count = parseInt(lineSplit[1]);
        obj[fruit] += count;
    }

    const boolean = Object.values(obj).includes(5);

    console.log(boolean ? 'YES' : 'NO');
    process.exit();
});