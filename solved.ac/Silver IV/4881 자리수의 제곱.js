const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    lineList.pop();

    const calculateNext = (num) => {
        return num
            .toString()
            .split('')
            .map((digit) => Math.pow(parseInt(digit), 2))
            .reduce((acc, val) => acc + val, 0);
    };

    const findSequence = (num) => {
        const map = new Map();
        let index = 0;

        while (!map.has(num)) {
            map.set(num, index);
            index++;
            num = calculateNext(num);
        }
        return map;
    };
    lineList.forEach((line) => {
        let [A, B] = line.split(' ').map((t) => parseInt(t));

        const aSeq = findSequence(A);
        const bSeq = findSequence(B);

        let minSteps = Infinity;
        aSeq.forEach((aSteps, num) => {
            if (bSeq.has(num)) {
                const bSteps = bSeq.get(num);
                minSteps = Math.min(minSteps, aSteps + bSteps);
            }
        });
        if (minSteps === Infinity) {
            console.log(`${A} ${B} 0`);
        } else {
            console.log(`${A} ${B} ${minSteps + 2}`); // 초기 값 포함해서 2를 더해줌
        }
    });
    process.exit();
});
