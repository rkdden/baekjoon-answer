const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const weekCount = parseInt(lineList.shift());
    const weekList = [];

    for (let i = 0; i < lineList.length; i += 4) {
        weekList.push(lineList.slice(i, i + 4));
    }

    const map = new Map();

    weekList.forEach((week) => {
        week.map((t, i) => {
            const nameList = t.split(' ');
            for (let j = 0; j < nameList.length; j++) {
                const name = nameList[j];
                if (name === '-') {
                    continue;
                }
                if (!map.has(name)) {
                    map.set(name, 0);
                }

                const value = map.get(name);
                switch (i) {
                    case 0:
                    case 2:
                        map.set(name, value + 4);
                        break;
                    case 1:
                        map.set(name, value + 6);
                        break;
                    case 3:
                        map.set(name, value + 10);
                        break;
                }
            }
        });
    });

    const value = [...map.values()];
    const maxValue = Math.max(...value);
    const minValue = Math.min(...value);

    const time = maxValue - minValue;

    let answer = 'No';

    if (value.length === 0 || time <= 12) {
        answer = 'Yes';
    }

    console.log(answer);

    process.exit();
});