const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const score = parseInt(line);
    console.log(score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F');
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
