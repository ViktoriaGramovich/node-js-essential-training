const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incrementTime = () => {
    currentTime += waitInterval;
    const percentage = Math.floor((currentTime/ waitTime) *100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${percentage}%`);
    // console.log(`waiting ${currentTime/1000} seconds`);
}

console.log(`setting a ${waitTime/1000} seconds delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log('done')
};

const interval = setInterval(incrementTime, waitInterval);
setTimeout(timerFinished, waitTime);