const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const [n, ...enters] = lineList;

    const set = new Set();

    for (let i = 0; i < enters.length; i++) {
        const [name, enter] = enters[i].split(' ');
        if (enter === 'enter') {
            set.add(name);
        } else {
            set.delete(name);
        }
    }

    const nameList = [...set].sort((a, b) => {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }

        // 이름이 같을 경우
        return 0;
    });

    console.log(nameList.join('\n'));
    process.exit();
});