const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const studentCount = parseInt(lineList[0]);
    const numberList = lineList[1].split(' ').map((t) => parseInt(t));

    let list = [1];
    for (let i = 1; i < numberList.length; i++) {
        const number = numberList[i];
        list.splice(list.length - number, 0, i + 1);
    }
    console.log(list.join(' '));
    process.exit();
});
