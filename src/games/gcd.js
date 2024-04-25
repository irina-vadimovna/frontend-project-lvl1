import { runGame, getRandomInt } from '../index.js';

const getNod = (randomNum1, randomNum2) => {
  let a = randomNum1;
  let b = randomNum2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const nod = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';

  const getQA = () => {
    const randomNum1 = getRandomInt(1, 100);
    const randomNum2 = getRandomInt(1, 100);
    const question = `${randomNum1} ${randomNum2}`;

    const correctAnswer = getNod(randomNum1, randomNum2).toString();

    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQA);
};
export default nod;
