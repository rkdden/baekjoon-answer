const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const map = new Map();
    map.set('.-', 'A');
    map.set('-...', 'B');
    map.set('-.-.', 'C');
    map.set('-..', 'D');
    map.set('.', 'E');
    map.set('..-.', 'F');
    map.set('--.', 'G');
    map.set('....', 'H');
    map.set('..', 'I');
    map.set('.---', 'J');
    map.set('-.-', 'K');
    map.set('.-..', 'L');
    map.set('--', 'M');
    map.set('-.', 'N');
    map.set('---', 'O');
    map.set('.--.', 'P');
    map.set('--.-', 'Q');
    map.set('.-.', 'R');
    map.set('...', 'S');
    map.set('-', 'T');
    map.set('..-', 'U');
    map.set('...-', 'V');
    map.set('.--', 'W');
    map.set('-..-', 'X');
    map.set('-.--', 'Y');
    map.set('--..', 'Z');
    map.set('.----', '1');
    map.set('..---', '2');
    map.set('...--', '3');
    map.set('....-', '4');
    map.set('.....', '5');
    map.set('-....', '6');
    map.set('--...', '7');
    map.set('---..', '8');
    map.set('----.', '9');
    map.set('-----', '0');
    map.set('--..--', ',');
    map.set('.-.-.-', '.');
    map.set('..--..', '?');
    map.set('---...', ':');
    map.set('-....-', '-');
    map.set('.--.-.', '@');
    let answer = '';

    lineList[1].split(' ').forEach((t) => {
        answer += map.get(t);
    });

    console.log(answer.toUpperCase());
    process.exit();
});
