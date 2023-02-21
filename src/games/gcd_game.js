import _ from "lodash";
import getGamePlay from "../index.js";

const ruleOfGame = "Find the greatest common divisor of given numbers.";

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  };
  return getGcd(num2 % num1, num1);
};

const brainGcd = () => {
  const firstRandomNumber = _.random(1, 100);

  const secondRandomNumber = _.random(1, 100);

  const numbers = `${firstRandomNumber} ${secondRandomNumber}`;

  const answer = getGcd(firstRandomNumber, secondRandomNumber).toString();

  return [numbers, answer];
};

const runBrainGcdGame = () => getGamePlay(ruleOfGame, brainGcd);

export default runBrainGcdGame;
