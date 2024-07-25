const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const words = line.trim().split(' ');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            count++;
        }
    }
    console.log(count);
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
