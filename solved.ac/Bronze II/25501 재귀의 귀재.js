const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lineList = [];

rl.on('line', function (line) {
    lineList.push(line);
}).on('close', function () {
    const isPalindrome = (s) => {
        let count = 0;
        let answer = 0;
        function recursion(s, l, r) {
            count++;
            if (l >= r) {
                return 1;
            } else if (s[l] !== s[r]) {
                return 0;
            } else {
                return recursion(s, l + 1, r - 1);
            }
        }
        answer = recursion(s, 0, s.length - 1);
        return { count, answer };
    };
    for (let i = 1; i < lineList.length; i++) {
        const line = lineList[i];
        const { count, answer } = isPalindrome(line);
        console.log(`${answer} ${count}`);
    }

    process.exit();
});