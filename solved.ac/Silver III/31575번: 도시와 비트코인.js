const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const [N, M] = lineList[0].split(' ').map((t) => parseInt(t));
    const copyMap = lineList.slice(1);

    const map = copyMap.map((m) => {
        return m.split(' ').map((t) => parseInt(t));
    });

    let answer = false;

    // 방문 여부
    const visited = map.map((t) => {
        return t.map((a) => !a);
    });

    // 큐 초기화
    const queue = [[0, 0]];
    // 0,0 방문
    visited[0][0] = true;

    while (queue.length > 0) {
        const [y, x] = queue.shift();

        if (x + 1 < N && !visited[y][x + 1]) {
            queue.push([y, x + 1]);
            visited[y][x + 1] = true;
        }
        if (y + 1 < M && !visited[y + 1][x]) {
            queue.push([y + 1, x]);
            visited[y + 1][x] = true;
        }
    }
    console.log(visited[M - 1][N - 1] ? 'Yes' : 'No');
    process.exit();
});
