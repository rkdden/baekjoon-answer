const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const T = parseInt(lineList[0]);
    for (let i = 1; i < lineList.length; i++) {
        const [H, W, N] = lineList[i].split(' ').map((t) => parseInt(t));
        let floor = N % H;
        let roomNumber = Math.floor(N / H) + 1;
        if (floor === 0) {
            floor = H;
            roomNumber = Math.floor((N - 1) / H) + 1;
        }

        let room = `${floor}${roomNumber.toString().padStart(2, '0')}`;
        console.log(room);
    }
    process.exit();
});