import readlineSync from 'readline-sync';

const getGamePlay = (ruleOfGame, valuesOfGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(ruleOfGame);

  const countRounds = 3;

  for (let i = 0; i < countRounds; i += 1) {
    const [question, answer] = valuesOfGame();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else if (userAnswer !== answer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default getGamePlay;
