const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const mapSize = parseInt(lineList[0]);
    const copyMap = lineList.slice(1);

    const map = copyMap.map((m) => {
        return m.split(' ').map((t) => parseInt(t));
    });

    let answer = false;

    // 방문 여부
    const visited = Array.from({ length: mapSize }, () => Array(mapSize).fill(false));

    // 큐 초기화
    const queue = [[0, 0]];
    // 0,0 방문
    visited[0][0] = true;

    while (0 < queue.length) {
        const [x, y] = queue.shift();

        const jump = map[x][y];

        // 점프값이 -1이면 정답
        if (jump === -1) {
            answer = true;
            break;
        }

        if (x + jump < mapSize && visited[x + jump][y] === false) {
            queue.push([x + jump, y]);
            visited[x + jump][y] = true;
        }
        if (y + jump < mapSize && visited[x][y + jump] === false) {
            queue.push([x, y + jump]);
            visited[x][y + jump] = true;
        }
    }

    console.log(answer ? 'HaruHaru' : 'Hing');
    process.exit();
});