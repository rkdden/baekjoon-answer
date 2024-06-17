const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const count = parseInt(lineList[0]);
    for (let i = 1; i <= count; i++) {
        const line = lineList[i];
        const [a, b] = line.split(' ');
        const word1 = [...a].sort().join('');
        const word2 = [...b].sort().join('');
        if (word1 === word2) {
            console.log(`${a} & ${b} are anagrams.`);
        } else {
            console.log(`${a} & ${b} are NOT anagrams.`);
        }
    }
    process.exit();
});
