const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    for (let i = 1; i < lineList.length; i++) {
        let str = '';
        const [R, S] = lineList[i].split(' ');
        for (let j = 0; j < S.length; j++) {
            str += S[j].repeat(parseInt(R));
        }
        console.log(str);
    }
    process.exit();
});
