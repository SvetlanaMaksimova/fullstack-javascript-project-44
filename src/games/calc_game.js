import _ from 'lodash';
import getGamePlay from '../index.js';

const ruleOfGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const brainCalc = () => {
  const randomOperator = _.random(0, 2);

  const firstOperand = _.random(1, 10);

  const secondOperand = _.random(1, 10);
  const expression = `${firstOperand} ${operators[randomOperator]} ${secondOperand}`;
  let result = 0;
  if (operators[randomOperator] === '+') {
    result = firstOperand + secondOperand;
  } else if (operators[randomOperator] === '-') {
    result = firstOperand - secondOperand;
  } else if (operators[randomOperator] === '*') {
    result = firstOperand * secondOperand;
  }

  const answer = result.toString();

  return [expression, answer];
};

const runBrainCalcGame = () => getGamePlay(ruleOfGame, brainCalc);

export default runBrainCalcGame;
