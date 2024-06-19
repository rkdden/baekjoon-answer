const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const fi = [BigInt(0), BigInt(1)];
    const num = parseInt(line);

    for (let i = 2; i <= num; i++) {
        const number = fi[i - 2] + fi[i - 1];
        fi[i] = number;
    }

    console.log(fi[num].toString());

    rl.close();
});

rl.on('close', () => {
    process.exit();
});
