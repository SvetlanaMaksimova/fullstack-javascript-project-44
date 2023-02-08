import readlineSync from 'readline-sync';

export const userName = readlineSync.question('May I have your name? ');

export const welcomeUser = () => {
    console.log('Welcome to the Brain Games!');
    userName;
    console.log(`Hello, ${userName}`);
};
