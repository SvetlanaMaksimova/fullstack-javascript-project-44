import _ from 'lodash';
import getGamePlay from '../index.js';

export const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const brainEven = () => {
  const randomNumber = _.random(1, 100);

  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const runBrainEvenGame = () => getGamePlay(ruleOfGame, brainEven);

export default runBrainEvenGame;
