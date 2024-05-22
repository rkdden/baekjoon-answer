const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    lineList.pop();
    const wordMap = new Map();
    wordMap.set('a', 1);
    wordMap.set('e', 1);
    wordMap.set('i', 1);
    wordMap.set('o', 1);
    wordMap.set('u', 1);

    lineList.forEach((line) => {
        const lineWords = [...line].map((t) => t.toLowerCase());
        let answer = 0;
        lineWords.forEach((l) => {
            if (wordMap.get(l)) {
                answer++;
            }
        });
        console.log(answer);
    });
    process.exit();
});