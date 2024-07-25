const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const [hour, minute] = line.split(' ').map((t) => parseInt(t));
    let changedHour = hour;
    let changedMinute = minute - 45;
    if (changedMinute < 0) {
        changedMinute = 60 + changedMinute;
        changedHour--;
    }

    if (changedHour < 0) {
        changedHour = 23;
    }

    console.log(`${changedHour} ${changedMinute}`);
    rl.close();
});

rl.on('close', () => {
    process.exit();
});
