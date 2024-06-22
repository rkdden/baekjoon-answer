const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    lineList.pop();
    lineList.forEach((line) => {
        const words = [...line];
        const stack = [];
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (word === '(' || word === '[') {
                stack.push(word);
            } else if (word === ')' || word === ']') {
                const current = stack.pop();
                if (!current) {
                    console.log('no');
                    return;
                }
                if (current !== '(' && word === ')') {
                    console.log('no');
                    return;
                }
                if (current !== '[' && word === ']') {
                    console.log('no');
                    return;
                }
            }
        }

        if (stack.length === 0) {
            console.log('yes');
        } else {
            console.log('no');
        }
    });
    process.exit();
});