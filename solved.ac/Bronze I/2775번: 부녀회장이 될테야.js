const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    lineList = lineList.map((t) => parseInt(t));
    const T = lineList[0];
    const kList = [];
    const nList = [];
    for (let i = 1; i < lineList.length; i++) {
        if (i % 2 !== 0) {
            kList.push(lineList[i]);
        } else {
            nList.push(lineList[i]);
        }
    }

    const apt = [[]];
    const kMax = Math.max(...kList);
    const nMax = Math.max(...nList);

    // 0층
    for (let j = 0; j <= nMax; j++) {
        apt[0][j] = j;
    }

    for (let i = 1; i <= kMax; i++) {
        apt.push([0]);
        for (let j = 1; j <= nMax; j++) {
            apt[i][j] = apt[i - 1][j] + apt[i][j - 1];
        }
    }

    for (let i = 0; i < T; i++) {
        const currentK = kList[i];
        const currentN = nList[i];
        console.log(apt[currentK][currentN]);
    }

    process.exit();
});
