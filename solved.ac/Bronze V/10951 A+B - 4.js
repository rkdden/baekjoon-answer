const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    lineList.forEach((line) => {
        console.log(
            line.split(' ').reduce((acc, cur) => {
                return acc + parseInt(cur);
            }, 0)
        );
    });
    process.exit();
});
