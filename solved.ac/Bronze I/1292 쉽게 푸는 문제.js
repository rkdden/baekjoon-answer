const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const [A, B] = line.split(' ').map((t) => parseInt(t));

    const arr = [];

    let current = 1;

    while (arr.length < B) {
        for (let i = 1; i <= current; i++) {
            arr.push(current);
        }
        current++;
    }

    console.log(arr.slice(A - 1, B).reduce((a, b) => a + b, 0));

    rl.close();
});

rl.on('close', () => {
    process.exit();
});