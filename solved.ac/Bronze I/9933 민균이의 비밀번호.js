const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const N = parseInt(lineList[0]);

    const set = new Set();

    let answer = '';

    for (let i = 1; i <= N; i++) {
        const currentPassword = lineList[i];
        const reversedPassword = [...currentPassword].reverse().join('');
        if (currentPassword === reversedPassword) {
            answer = currentPassword;
            break;
        }

        if (set.has(currentPassword)) {
            answer = currentPassword;
            break;
        } else {
            set.add(currentPassword);
            set.add(reversedPassword);
        }
    }

    const a = [...answer];
    const length = a.length;
    console.log(`${a.length} ${a[Math.floor(length / 2)]}`);

    process.exit();
});