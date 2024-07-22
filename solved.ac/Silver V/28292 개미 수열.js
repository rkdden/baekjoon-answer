const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// TODO: 정답은 아래 인거 같은데 시간 초과남
//  시간복잡도 개선 필요


rl.on('line', (line) => {
    const N = parseInt(line);

    // 1부터 시작
    // N까지 반복하면서 N의 숫자를 찾음.
    // 연속된 숫자와 갯수를 이어붙임
    // 연속된 숫자가 깨진다면 새롭게 count
    // const antSequence = ['1'];

    let currentAntSequence = '1';

    for (let i = 1; i < N; i++) {
        let currentNumber = '';
        let prevSequence = currentAntSequence;
        const prevSequenceLength = prevSequence.length;
        // 처음은 무조건 카운트 되기 떄문에 1
        let count = 1;
        for (let j = 0; j < prevSequence.length; j++) {
            if (j < prevSequenceLength - 1 && prevSequence[j] === prevSequence[j + 1]) {
                count++;
            } else {
                currentNumber += prevSequence[j] + count.toString();
                count = 1;
            }
        }
        currentAntSequence = currentNumber;
    }

    // 개미수열의 마지막에서 가장 큰 수
    console.log(Math.max(...currentAntSequence.split('').map((t) => parseInt(t))));

    rl.close();
});

rl.on('close', () => {
    process.exit();
});
