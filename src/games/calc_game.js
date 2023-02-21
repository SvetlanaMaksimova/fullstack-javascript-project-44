import _ from 'lodash';
import getGamePlay from '../index.js';

const ruleOfGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculation = (num1, num2, oper) => {
  switch (operators) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Operator ${oper} - is invalid!`)
  } 
}

const brainCalc = () => {
  const randomOperator = _.random(0, 2);

  const firstOperand = _.random(1, 10);

  const secondOperand = _.random(1, 10);
  
  const expression = `${firstOperand} ${operators[randomOperator]} ${secondOperand}`;

  const answer = calculation(firstOperand, secondOperand,operators[randomOperator]).toString();

  return [expression, answer];
};

const runBrainCalcGame = () => getGamePlay(ruleOfGame, brainCalc);

export default runBrainCalcGame;
