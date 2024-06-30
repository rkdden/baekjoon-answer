const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    for (let i = 1; i <= parseInt(line); i++) {
        console.log(i);
    }
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
