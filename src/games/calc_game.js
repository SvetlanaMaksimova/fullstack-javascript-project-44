import _ from 'lodash';
import getGamePlay from '../index.js';

const ruleOfGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculation = (num1, num2, oper) => {
  switch (oper) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Operator ${oper} - is invalid!`);
  }
};

const brainCalc = () => {
  const randomIndex = _.random(0, 2);
  
  const randomOperator = operators[randomIndex];

  const firstOperand = _.random(1, 10);

  const secondOperand = _.random(1, 10);

  const expression = calculation(firstOperand, secondOperand, randomOperator);

  const question = `${firstOperand} ${randomOperator} ${secondOperand}`;

  const answer = expression.toString();

  return [question, answer];
};

const runBrainCalcGame = () => getGamePlay(ruleOfGame, brainCalc);

export default runBrainCalcGame;
