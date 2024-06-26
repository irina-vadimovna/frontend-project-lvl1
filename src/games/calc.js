import { runGame, getRandomInt } from '../index.js';

const operator = () => {
  const arr = ['+', '-', '*'];
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
};

const calculation = (randomNum1, randomNum2, sign) => {
  let res = 0;
  switch (sign) {
    case '+':
      res = randomNum1 + randomNum2;
      break;
    case '-':
      res = randomNum1 - randomNum2;
      break;
    case '*':
      res = randomNum1 * randomNum2;
      break;
    default:
      console.log('');
  }
  return res;
};

const calc = () => {
  const gameRules = 'What is the result of the expression?';

  const getQA = () => {
    const randomNum1 = getRandomInt(1, 20);
    const randomNum2 = getRandomInt(1, 20);
    const sign = operator();

    const question = `${randomNum1} ${sign} ${randomNum2}`;
    const correctAnswer = calculation(randomNum1, randomNum2, sign).toString();
    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQA);
};
export default calc;
