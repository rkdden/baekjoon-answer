const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const N = parseInt(input[0]);
    const A = input[1].split(' ').map(Number);
    const B = input[2].split(' ').map(Number);

    if (selectionSortMatches(A, B)) {
        console.log(1);
    } else {
        console.log(0);
    }
    process.exit();
});

function selectionSortMatches(A, B) {
    const n = A.length;
    if (arraysEqual(A, B)) {
        return true;
    }
    for (let last = n - 1; last >= 1; last--) {
        let maxIdx = 0;
        for (let i = 1; i <= last; i++) {
            if (A[i] > A[maxIdx]) {
                maxIdx = i;
            }
        }
        if (last !== maxIdx) {
            [A[last], A[maxIdx]] = [A[maxIdx], A[last]];
        }
        if (arraysEqual(A, B)) {
            return true;
        }
    }
    return false;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}