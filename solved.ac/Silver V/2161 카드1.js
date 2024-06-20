const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const N = parseInt(line);
    const answer = [];
    const cards = [];
    for (let i = 1; i < N + 1; i++) {
        cards.push(i);
    }

    while (1 < cards.length) {
        const removedCard = cards.shift();
        const movedCaed = cards.shift();
        answer.push(removedCard);
        cards.push(movedCaed);
    }

    answer.push(cards[0]);

    console.log(...answer);
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
