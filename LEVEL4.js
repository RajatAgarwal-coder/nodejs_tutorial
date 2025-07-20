// When we work in Sync the Event Loop get block and the pending tasks cannot get executed

// Blocking VS Async

const fs = require('fs');

console.log('1. Start of script' );

console.log('2. Reading file synchronously' );
const dataSync = fs.readFileSync ('user-details.txt' , 'utf8');
console.log('3. Synchronous read complete' );

console.log('4. Reading file asynchronously' );
fs.readFile('user-details.txt' , 'utf8', (err, dataAsync ) => {
if (err) throw err;
    console.log('6. Asynchronous read complete' );
});

console.log('5. End of script' );

// Micro Task is not in Event Loop. It has the highest priority and gets executed before the Event Loop starts processing the next task.

console.log('1. Start of script');

Promise.resolve().then(() => console.log('2. Microtask 1'));

setTimeout(() => console.log('3. Timer 1'), 0);

fs.readFile('user-details.txt', () => console.log('4. I/O operation'));

setImmediate(() => console.log('5. Immediate 1'));

process.on('exit', (code) => {
console.log('6. Exit event');
});

console.log('7. End of script');