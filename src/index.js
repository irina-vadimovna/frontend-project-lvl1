import readlineSync from 'readline-sync';

export function getRandomInt(min, max) {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
}

export const runGame = (gameRules, getQA) => {
  const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
  };
  const userName = greeting();
  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = getQA();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
