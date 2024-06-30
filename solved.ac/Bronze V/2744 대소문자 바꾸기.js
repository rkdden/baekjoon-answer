const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    let answer = '';
    for (let i = 0; i < line.length; i++) {
        const word = line.charCodeAt(i);
        if (97 <= word && word <= 122) {
            answer += String.fromCharCode(word - 32);
        } else {
            answer += String.fromCharCode(word + 32);
        }
    }
    console.log(answer);
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
