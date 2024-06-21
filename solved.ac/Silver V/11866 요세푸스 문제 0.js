const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const [N, K] = line.split(' ').map((t) => parseInt(t));
    const queue = [];

    for (let i = 1; i < N + 1; i++) {
        queue.push(i);
    }
    const answer = [];

    while (0 < queue.length) {
        for (let i = 0; i < K; i++) {
            const current = queue.shift();
            if (i === K - 1) {
                answer.push(current);
            } else {
                queue.push(current);
            }
        }
    }
    console.log(`<${answer.join(', ')}>`);
    rl.close();
});

rl.on('close', () => {
    process.exit();
});