const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const n = parseInt(line);
    for (let i = 1; i <= 9; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
