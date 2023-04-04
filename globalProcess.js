console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

//node globalProcess Vika Hramovich
const [,,firstName,lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`);