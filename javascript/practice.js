const prompt = require("prompt-sync")();

console.log("Welcome");

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt("What is the brain of the computer? ");
const correct_answer1 = "CPU";

if (answer1.toUpperCase() === correct_answer1) {
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log("Wrong!");
}

const answer2 = prompt("What is higher 5 or 7? ");
const correct_answer2 = "7";

if (answer2 === correct_answer2) {
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log("Wrong!");
}

const answer3 = prompt("What is the recommended amount of RAM? ");
const correct_answer3 = "16GB";

if (answer3.toUpperCase() === correct_answer3) {
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log("Wrong!");
}

console.log("You got", correctAnswers, "correct!")

const percent = Math.round(correctAnswers*100/totalQuestions)
console.log("You got", percent.toString() + "% correct!")