const readline = require('node:readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome to Holberton School, what is your name?");
read.question("Your name is: ", () => {

    console.log("This important software is now closing");
    read.close();
});