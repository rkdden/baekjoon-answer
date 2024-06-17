const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const [N, M] = line.split(' ').map((t) => BigInt(t));
    const num = N - M;
    const strNum = num.toString().replace('-', '');
    console.log(strNum);
    rl.close();
});

rl.on('close', () => {
    process.exit();
});