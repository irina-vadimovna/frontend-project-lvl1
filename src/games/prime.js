import { runGame, getRandomInt } from '../index.js';

const prime = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQA = () => {
    const question = getRandomInt(2, 100);
    let correctAnswer = 'yes';

    if (question === 2) {
      correctAnswer = 'yes';
    }
    for (let i = 2; i < question; i += 1) {
      if (question % i === 0) {
        correctAnswer = 'no';
      }
    }

    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQA);
};
export default prime;
