const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const num = parseInt(line);
    if (num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)) {
        console.log(1);
    } else {
        console.log(0);
    }
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
