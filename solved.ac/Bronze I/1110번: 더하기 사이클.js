const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];
const sum = (numList) => {
    return numList.reduce((acc, cur) => {
        return acc + parseInt(cur);
    }, 0);
};

const getNewNum = (num) => {
    // 숫자를 문자열로 나열 ['2', '6']
    const strNum = [...num.toString()];
    // 10보다 작으면 앞에 0을 추가
    if (num < 10) {
        strNum.unshift('0');
    }
    // 오른쪽 문자열
    let rightStr = strNum[1];

    const sumNum = [...sum(strNum).toString()];
    const right2Str = sumNum[sumNum.length - 1];

    const newStr = rightStr + right2Str;

    return parseInt(newStr);
};

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const originalNum = parseInt(lineList[0]);
    let currentNum = originalNum;
    let count = 0;
    while (true) {
        if (count !== 0 && currentNum === originalNum) {
            break;
        }
        currentNum = getNewNum(currentNum);
        count++;
    }
    console.log(count);
    process.exit();
});