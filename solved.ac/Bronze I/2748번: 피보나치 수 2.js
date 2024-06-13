const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const num = parseInt(line);
    const fiList = [BigInt(0), BigInt(1)];

    for (let i = 2; i <= num; i++) {
        fiList[i] = BigInt(fiList[i - 2]) + BigInt(fiList[i - 1]);
    }

    console.log(fiList[num].toString());
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
