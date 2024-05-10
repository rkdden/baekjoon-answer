let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

const test = [['@',' ', ' ', ' ','@'], ['@','@','@','@','@',]];

const l1 = test[0].map(t => t.repeat(num)).join('');
const l2 = test[1].map(t => t.repeat(num)).join('');

let result = '';

for (let i = 0; i < num; i++) {
    result += l1;
    result += '\n';
}

for (let i = 0; i < num; i++) {
    result += l2;
    result += '\n';
}

for (let i = 0; i < num; i++) {
    result += l1;
    result += '\n';
}

for (let i = 0; i < num; i++) {
    result += l2;
    result += '\n';
}

for (let i = 0; i < num; i++) {
    result += l1;
    result += '\n';
}

console.log(result)
