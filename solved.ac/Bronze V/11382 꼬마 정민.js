const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    console.log(
        line.split(' ').reduce((acc, cur) => {
            return acc + parseInt(cur);
        }, 0)
    );
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
