const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    lineList.shift();

    lineList.forEach((line) => {
        const words = [...line];
        const stack = [];

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (word === '(') {
                stack.push(word);
            } else {
                const w = stack.pop();
                if (!w) {
                    console.log('NO');
                    return;
                }
                if (w === ')') {
                    console.log('NO');
                    return;
                }
            }
        }

        if (stack.length === 0) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    });
    process.exit();
});
