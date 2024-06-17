const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const [A, B] = line.split(' ').map((t) => parseInt(t));
    if (A < B) {
        console.log('<');
    } else if (B < A) {
        console.log('>');
    } else {
        console.log('==');
    }
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
