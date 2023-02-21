import _ from 'lodash';
import getGamePlay from '../index.js';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const number = _.random(2, 50);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

const runBrainPrimeGame = () => getGamePlay(ruleOfGame, brainPrime);

export default runBrainPrimeGame;
