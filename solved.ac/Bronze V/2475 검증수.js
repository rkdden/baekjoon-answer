const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const num = line
        .split(' ')
        .map((t) => {
            return Math.pow(parseInt(t), 2);
        })
        .reduce((acc, cur) => acc + cur, 0);
    console.log(num % 10);
    rl.close();
});

rl.on('close', () => {
    process.exit();
});