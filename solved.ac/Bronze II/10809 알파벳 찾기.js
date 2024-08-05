const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    let answer = '';
    for (let i = 97; i <= 122; i++) {
        const alphabet = String.fromCharCode(i);
        answer += `${line.indexOf(alphabet)} `;
    }

    console.log(answer.trim());
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
