const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    let result = 0;
    for (let i = 1; i <= parseInt(line); i++) {
        result += i;
    }
    console.log(result);
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
