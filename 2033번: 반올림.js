const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    let n = parseFloat(line);
    let factor = 10; // 시작 반올림 기준 (일의 자리)

    while (n >= factor) {
        // 해당 자리에서 반올림
        n = Math.round(n / factor) * factor;
        factor *= 10; // 다음 자리수로 이동
    }

    console.log(n);
    rl.close();
});

rl.on('close', () => {
    /*입력이 끝나고 실행할 코드*/
    process.exit();
});
