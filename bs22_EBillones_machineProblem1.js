const prompt = require('prompt-sync')();
const maxNum = 100;
const maxTrials = 10;

let playAgain = true;

while (playAgain) {
  let randomNumber = Math.floor(Math.random() * maxNum) + 1;
  let trial = 1;
  let guess;

  do {
    guess = parseInt(prompt(`Guess a number between 1 and ${maxNum} (Trial ${trial} of ${maxTrials}): `));
    console.log(`Your guess is: ${guess}`);
    if (guess < randomNumber) {
      console.log("Too low, try again!");
    } else if (guess > randomNumber) {
      console.log("Too high, try again!");
    }
    trial++;
  } while (guess !== randomNumber && trial <= maxTrials);

  if (guess === randomNumber) {
    console.log(`Congratulations! You guessed the number ${randomNumber} correctly in ${trial-1} trials!`);
  } else {
    console.log(`Sorry, you've exceeded the maximum number of trials. The number was ${randomNumber}.`);
  }

  playAgain = prompt("Do you want to play again? (y/n)").toLowerCase() === 'y';
}

console.log("Thanks for playing!");
