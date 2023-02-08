#!/usr/bin/env node

import _ from 'lodash';
import readlineSync from 'readline-sync';
import {welcomeUser, userName} from './src/cli.js';

console.log(welcomeUser());
const brainEven =  () => {
    for (let i = 0; i < 3; i += 1) {

        let randomNumber = _.random(0, 100);

        console.log(`Question: ${randomNumber}`);

        const userAnswer = readlineSync.question('Your answer: ');

        let correctAnswer = 'Correct!';

        if (randomNumber % 2 === 0 && userAnswer === 'yes') {
        console.log(correctAnswer);
        } else if (randomNumber % 2!== 0 && userAnswer === 'no') {
        console.log(correctAnswer);
        } else if (randomNumber % 2 === 0 && userAnswer === 'no') {
        console.log (`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
        } else if (randomNumber % 2!== 0 && userAnswer === 'yes') {
        console.log (`${userAnswer} is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
        } else {
            console.log(`Let's try again, ${userName}!`)
            break;
        }
        console.log(`Congratulations, ${userName}!`);
    }

    
};

console.log(brainEven());

export default brainEven;