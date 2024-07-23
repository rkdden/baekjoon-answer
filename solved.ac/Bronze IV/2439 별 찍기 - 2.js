const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const num = parseInt(line);
    const emptyString = ' ';
    let current = 1;
    for (let i = num; 0 < i; i--) {
        console.log(emptyString.repeat(i - 1) + '*'.repeat(current));
        current++;
    }
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
