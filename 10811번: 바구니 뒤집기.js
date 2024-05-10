const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    //입력한 값을 처리하는 코드
    lineList.push(line);
}).on('close', function () {
    const NM = lineList.shift().split(' ');
    const N = parseInt(NM[0]);
    const M = parseInt(NM[1]);

    //
    let bucketList = [];
    for (let i = 0; i < N; i++) {
        bucketList.push(i + 1);
    }

    for (let i = 0; i < M; i++) {
        let [k, l] = lineList[i].split(' ').map((t) => parseInt(t));
        k = k - 1;
        l = l - 1;
        let reversedArray = bucketList.slice(k, l + 1).reverse();
        bucketList = [...bucketList.slice(0, k), ...reversedArray, ...bucketList.slice(l + 1)];
    }
    console.log(bucketList.join(' '));
    process.exit();
});