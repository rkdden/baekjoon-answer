const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const [arrLength, K] = lineList[0].split(' ').map((t) => parseInt(t));
    if (lineList[1] === lineList[2]) {
        console.log(1);
        process.exit();
    }
    const numberArr = lineList[1].split(' ').map((t) => parseInt(t));
    const numberArr2 = lineList[2];

    let answer = 0;

    for (let i = numberArr.length - 1; 0 < i; i--) {
        let maxNumberIndex = i;
        for (let j = 0; j < i; j++) {
            if (numberArr[maxNumberIndex] < numberArr[j]) {
                maxNumberIndex = j;
            }
        }
        if (i !== maxNumberIndex) {
            let temp = numberArr[maxNumberIndex];
            numberArr[maxNumberIndex] = numberArr[i];
            numberArr[i] = temp;
            if (numberArr.join(' ') === numberArr2) {
                answer = 1;
                break;
            }
        }
    }

    console.log(answer);

    process.exit();
});
