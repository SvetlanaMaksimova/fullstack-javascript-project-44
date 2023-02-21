import _ from 'lodash';
import getGamePlay from '../index.js';

const ruleOfGame = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progressive = [];
  while (progressive.length < length) {
    progressive.push(start);
    start += step;
  }
  return progressive;
};

const brainProgressive = () => {
  const randomStartArr = _.random(1, 50);
  const randomStep = _.random(1, 10);
  const randomHide = _.random(0, 9);
  const lengthProgressive = 10;
  const progressive = getProgression(randomStartArr, randomStep, lengthProgressive);

  const answer = progressive[randomHide].toString();
  progressive[randomHide] = '..';

  const question = progressive.join(' ');

  return [question, answer];
};

const runBrainProgressiveGame = () => getGamePlay(ruleOfGame, brainProgressive);

export default runBrainProgressiveGame;
