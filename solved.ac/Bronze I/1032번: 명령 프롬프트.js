const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    let answer = '';
    const num = parseInt(lineList.shift());

    const fileNames = lineList.map((l) => {
        return [...l];
    });

    const nameLength = fileNames[0].length;

    for (let i = 0; i < nameLength; i++) {
        const currentChar = fileNames[0][i];
        let isSame = true;
        for (let j = 1; j < num; j++) {
            const compareChar = fileNames[j][i];
            if (currentChar !== compareChar) {
                isSame = false;
                break;
            }
        }
        if (isSame) {
            answer += currentChar;
        } else {
            answer += '?';
        }
    }
    console.log(answer);
    process.exit();
});