const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const [A, K] = lineList[0].split(' ').map((t) => parseInt(t));
    const [...numberArray] = lineList[1].split(' ').map((t) => parseInt(t));

    // 교환 횟수
    let count = 0;
    let answer = false;
    let A1 = 0;
    let A2 = 0;

    // 버블 정렬 알고리즘
    for (let i = A; 1 < i; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (numberArray[j] > numberArray[j + 1]) {
                let temp = numberArray[j];
                numberArray[j] = numberArray[j + 1];
                numberArray[j + 1] = temp;
                count++;
                if (count === K) {
                    A1 = numberArray[j];
                    A2 = numberArray[j + 1];
                    answer = true;
                }
            }
        }
    }

    // 작은수부터 조회
    const number = [A1, A2].sort((a, b) => a - b).join(' ');

    console.log(answer ? number : -1);

    process.exit();
});
