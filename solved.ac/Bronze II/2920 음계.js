const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    let asc = false;
    let desc = false;

    const numList = line.split(' ').map((t) => parseInt(t));

    for (let i = 0; i < numList.length - 1; i++) {
        const num = numList[i];
        const nextNum = numList[i + 1];
        if (num < nextNum) {
            asc = true;
        } else {
            desc = true;
        }
    }

    if (asc && desc) {
        console.log('mixed');
    } else if (asc) {
        console.log('ascending');
    } else {
        console.log('descending');
    }
    rl.close();
});

rl.on('close', () => {
    process.exit();
});

