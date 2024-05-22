const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const f1 = (num) => {
        if (num === BigInt(0)) {
            console.log(0);
        } else if (num < BigInt(0)) {
            console.log('-');
        } else {
            console.log('+');
        }
    };
    const sum = (acc, cur) => {
        return acc + BigInt(cur);
    };
    let testList = [];
    for (let i = 0; i < 3; i++) {
        const s = Number(lineList.shift());
        const t = lineList.splice(0, s);
        testList.push(t);
    }
    testList.forEach((t) => {
        f1(t.reduce(sum, BigInt(0)));
    });

    process.exit();
});