const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    //입력한 값을 처리하는 코드
    lineList.push(line);
}).on('close', function () {
    const total = parseInt(lineList.shift());
    const totalCount = lineList.shift();
    let totalPrice = 0;
    lineList.forEach((l) => {
        const [price, count] = l.split(' ').map((l) => parseInt(l));
        totalPrice += price * count;
    });
    console.log(total === totalPrice ? 'Yes' : 'No');
    process.exit();
});