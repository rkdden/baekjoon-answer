const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    console.log(
        new Set(
            lineList.map((line) => {
                return parseInt(line) % 42;
            })
        ).size
    );
    process.exit();
});
