const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const [A, K] = lineList[0].split(' ').map((t) => parseInt(t));
    const arr = lineList[1].split(' ').map((t) => parseInt(t));

    let count = 0;
    for (let i = 1; i < A; i++) {
        // 비교할 값
        let loc = i - 1;
        let newItem = arr[i];
        while (0 <= loc && newItem < arr[loc]) {
            arr[loc + 1] = arr[loc];
            count++;
            if (count === K) {
                console.log(arr[loc]);
                process.exit();
            }
            loc--;
        }
        if (loc + 1 !== i) {
            arr[loc + 1] = newItem;
            count++;
            if (count === K) {
                console.log(newItem);
                process.exit();
            }
        }
    }

    console.log(-1);
    process.exit();
});
