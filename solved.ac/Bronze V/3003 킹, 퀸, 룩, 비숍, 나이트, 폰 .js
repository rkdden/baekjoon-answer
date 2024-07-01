const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const countList = line.split(' ').map((t, i) => {
        const count = parseInt(t);
        // 0 또는 1인 경우
        if ([0, 1].includes(i)) {
            return 1 - count;
        } else if ([2, 3, 4].includes(i)) {
            return 2 - count;
        } else {
            return 8 - count;
        }
    });
    console.log(countList.join(' '));

    rl.close();
});

rl.on('close', () => {
    process.exit();
});
