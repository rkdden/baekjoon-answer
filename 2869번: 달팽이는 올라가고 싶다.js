const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const [a, b, v] = line.split(' ').map((t) => parseInt(t));


    if (a >= v) {
        console.log(1);
    } else {
        const days = Math.ceil((v - a) / (a - b));

        console.log(days + 1);
    }

    rl.close();
});

rl.on('close', () => {
    process.exit();
});