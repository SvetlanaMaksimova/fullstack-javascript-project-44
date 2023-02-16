import _ from 'lodash';
import getGamePlay from '../index.js';

const ruleOfGame = 'What number is missing in the progression?';

const brainProgressive = () => {
  let randomStartArr = _.random(1, 50);
  const randomStep = _.random(1, 10);
  const randomHide = _.random(0, 9);
  const progressive = [];

  while (progressive.length < 10) {
    progressive.push(randomStartArr);
    randomStartArr += randomStep;
  }
  const answer = progressive[randomHide].toString();

  progressive[randomHide] = '..';

  const question = progressive.join(' ');

  return [question, answer];
};

const runBrainProgressiveGame = () => getGamePlay(ruleOfGame, brainProgressive);

export default runBrainProgressiveGame;
