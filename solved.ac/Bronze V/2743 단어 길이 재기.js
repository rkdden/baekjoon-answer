const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    console.log(line.length);
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
