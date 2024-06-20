const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


const desc = (a, b) => b - a;

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    let [N, D, ...candidates] = lineList.map((t) => parseInt(t));
    let answer = 0;
    while (true) {
        candidates.sort(desc);
        // 가장 높은 값을 꺼내옴
        let current = candidates.shift() ?? 0;
        if (D <= current) {
            D += 1;
            current -= 1;
            answer++;
        } else {
            break;
        }
        candidates.push(current);
    }
    console.log(answer);
    process.exit();
});
