const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    /*입력 받는 값을 처리하는 코드*/
    console.log(parseInt(line) % 2 ? 'Goose' : 'Duck');
    rl.close();
});

rl.on('close', () => {
    /*입력이 끝나고 실행할 코드*/
    process.exit();
});