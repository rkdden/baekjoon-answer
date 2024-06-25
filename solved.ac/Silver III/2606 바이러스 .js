const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const computerCount = parseInt(lineList.shift());
    const edgeCount = parseInt(lineList.shift());
    const graph = new Map();
    lineList.forEach((line) => {
        const [vertex1, vertex2] = line.split(' ').map((t) => parseInt(t));
        if (!graph.get(vertex1)) {
            graph.set(vertex1, []);
        }
        if (!graph.get(vertex2)) {
            graph.set(vertex2, []);
        }
        graph.get(vertex1).push(vertex2);
        graph.get(vertex2).push(vertex1);
    });

    const dfs = (graph, startVertex) => {
        const visited = new Set();
        // dfs 결과가 담길 array
        const result = [];

        const dfsHelper = (vertex) => {
            // 연결된 노드가 없으면 종료
            if (!vertex) {
                return;
            }
            visited.add(vertex);
            result.push(vertex);
            // 연결된 노드
            const vertexList = graph.get(vertex) ?? [];
            for (let i = 0; i < vertexList.length; i++) {
                const n = vertexList[i];
                if (!visited.has(n)) {
                    dfsHelper(vertexList[i]);
                }
            }
        };
        dfsHelper(startVertex);
        return result;
    };

    const t = dfs(graph, 1);
    console.log(t.length - 1);

    process.exit();
});
