import _ from "lodash";
import readlineSync from "readline-sync";

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);
console.log(ruleOfGame);

const brainEven = () => {
  for (let i = 0; i < 3; i += 1) {
    let randomNumber = _.random(1, 100);

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question("Your answer: ");

    if (randomNumber % 2 === 0 && userAnswer === "yes") {
      console.log("Correct!");
    } else if (randomNumber % 2 !== 0 && userAnswer === "no") {
      console.log("Correct!");
    } else if (randomNumber % 2 === 0 && userAnswer === "no") {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was 'yes'.`
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (randomNumber % 2 !== 0 && userAnswer === "yes") {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainEven;
