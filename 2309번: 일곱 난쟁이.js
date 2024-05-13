const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

const sum = (arr) => {
    return arr.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
};

rl.on('line', function (line) {
    //입력한 값을 처리하는 코드
    lineList.push(line);
}).on('close', function () {
    const heightList = lineList.map((t) => parseInt(t)).sort((a, b) => a - b);
    let found = false;
    const total = sum(heightList);
    for (let i = 0; i < heightList.length; i++) {
        for (let j = i + 1; j < heightList.length; j++) {
            if (total - heightList[i] - heightList[j] === 100) {
                const result = heightList.filter((_, index) => index !== i && index !== j);
                result.forEach((height) => console.log(height));
                found = true;
                break;
            }
        }
        if (found) break;
    }
    process.exit();
});