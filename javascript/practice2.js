const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 100);

let guesses = 0;

while (true) {

    const guess = Number(prompt("Guess: "));
    guesses++;

    if (guess > target) {
        console.log("go lower");
    } else if (guess < target) {
        console.log("go hihger");
    } else {
        console.log("Correct!!");
        break;
    }
}

console.log("Took you", guesses, "guesses");