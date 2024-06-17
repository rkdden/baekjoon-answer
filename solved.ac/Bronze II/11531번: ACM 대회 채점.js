const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    // const map: Map<string, { solved: boolean; wrongCount: number; time: number }> = new Map();
    const map = new Map();
    for (let i = 0; i < lineList.length - 1; i++) {
        const line = lineList[i].split(' ');
        const [stringM, problem, result] = line;
        const m = parseInt(stringM);

        if (!map.has(problem)) {
            map.set(problem, { solved: false, wrongCount: 0, time: 0 });
        }

        const mapReuslt = map.get(problem);

        if (mapReuslt.solved === true) {
            continue;
        }

        if (result === 'right') {
            mapReuslt.solved = true;
            mapReuslt.time = m;
        } else {
            mapReuslt.wrongCount++;
        }
    }

    let penalty = 0;
    let solvedProblemCount = 0;

    map.forEach((t, problem) => {
        if (t.solved) {
            solvedProblemCount++;
            penalty += t.time + t.wrongCount * 20;
        }
    });

    console.log(`${solvedProblemCount} ${penalty}`);
});