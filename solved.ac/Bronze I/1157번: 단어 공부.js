const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const map = new Map();
    const wordList = [...line.toLowerCase()];
    for (let i = 0; i < wordList.length; i++) {
        const w = wordList[i];
        if (!map.has(w)) {
            map.set(w, { count: 0 });
        }

        const t = map.get(w);
        t.count++;
    }

    let current = 0;
    let answer = '';
    for (const [key, { count }] of map) {
        if (current < count) {
            answer = key;
            current = count;
        } else if (current === count) {
            answer = '?';
        }
    }

    console.log(answer.toUpperCase());
    rl.close();
});

rl.on('close', () => {
    process.exit();
});