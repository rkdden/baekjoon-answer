const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const num = parseInt(line);
    for (let i = 1; i <= num; i++) {
        console.log('*'.repeat(i));
    }
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
