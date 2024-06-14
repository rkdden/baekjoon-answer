const date = new Date();
date.setTime(date.getTime() + 540 * 60000);

console.log(date.toISOString().split('T')[0]);