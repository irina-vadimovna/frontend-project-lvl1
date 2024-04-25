import { runGame, getRandomInt } from '../index.js';

const isEven = (number) => number % 2 === 0;

const num = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQA = () => {
    const question = getRandomInt(1, 999);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQA);
};
export default num;
