const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

const cal = (nums) => {
    const calNums = [];
    for (let i = 0; i < nums.length - 1; i++) {
        const a = parseInt(nums[i]);
        const b = parseInt(nums[i + 1]);
        //@ts-ignore
        const calNum = [...(a + b).toString()] as string[];
        const number = calNum.length < 2 ? calNum[0] : calNum[1];
        calNums.push(number);
    }
    return calNums;
};

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const firstNum = [...lineList[0]];
    const secondNum = [...lineList[1]];

    let nums = [];

    for (let i = 0; i < 8; i++) {
        nums.push(firstNum[i]);
        nums.push(secondNum[i]);
    }

    while (2 < nums.length) {
        nums = cal(nums);
    }
    console.log(nums.join(''));

    process.exit();
});
