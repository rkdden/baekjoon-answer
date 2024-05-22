const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const [A, B] = lineList.map((t) => BigInt(t));
    console.log((A + B).toString());
    console.log((A - B).toString());
    console.log((A * B).toString());

    process.exit();
});