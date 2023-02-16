import _ from 'lodash';
import getGamePlay from '../index.js';

export const ruleOfGame = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const firstRandomNumber = _.random(1, 100);
  const secondRandomNumber = _.random(1, 100);
  let firstNumber = firstRandomNumber;
  let secondNumber = secondRandomNumber;
  let result = 0;
  while (firstNumber !== secondNumber) {
    if (firstNumber < secondNumber) {
      result = firstNumber;
      firstNumber = secondNumber - firstNumber;
      secondNumber = result;
    } else {
      result = secondNumber;
      secondNumber = firstNumber - secondNumber;
      firstNumber = result;
    }
  }
  const numbers = `${firstRandomNumber} ${secondRandomNumber}`;
  const answer = result.toString();

  return [numbers, answer];
};

const runBrainGcdGame = () => getGamePlay(ruleOfGame, brainGcd);

export default runBrainGcdGame;
