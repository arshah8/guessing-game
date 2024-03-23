#! usr/bin/env node


import inquirer from "inquirer";
console.log("--Number Guessing Game--");
const randomNum = Math.floor(Math.random() * 10);
for (;;) {
  const answer = await inquirer.prompt([
    {
      message: " Enter your Guessed Number: ",
      type: "number",
      name: "guessedNumber",
    },
  ]);

  if (answer.guessedNumber === randomNum) {
    console.log("Congrats ! You Guessed it right .");
  } else {
    console.log("Wrong Guess , Try again...");
  }

  const ex = await inquirer.prompt([
    {
      message: "Do you want to ",
      type: "list",
      name: "exi",
      choices: ["continue playing", "exit"],
    },
  ]);

  if (ex.exi === "exit") {
    break;
  }
}
