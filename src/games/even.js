import { runGame, getRandomInt } from '../index.js';

const num = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQA = () => {
    const question = getRandomInt(1, 999);
    let correctAnswer = '';
    if (question % 2 === 0) {
      correctAnswer = 'yes';
    } else if (question % 2) {
      correctAnswer = 'no';
    }
    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQA);
};
export default num;
