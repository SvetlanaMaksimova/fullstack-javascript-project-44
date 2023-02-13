import _ from "lodash";
import getGamePlay from "../index.js";

const ruleOfGame =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return "no";
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return "no";
    }
  }
  return "yes";
};

const brainPrime = () => {
  const number = _.random(2, 50);
  let answer = isPrime(number);
  return [number, answer];
};

const brainPrimeGame = () => {
  return getGamePlay(ruleOfGame, brainPrime);
};

export default brainPrimeGame;
