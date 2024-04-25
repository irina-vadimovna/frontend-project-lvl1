import { runGame, getRandomInt } from '../index.js';

const isPrime = (question) => {
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQA = () => {
    const question = getRandomInt(2, 100);

    let correctAnswer = isPrime(question) ? 'yes' : 'no';
    if (question === 2) {
      correctAnswer = 'yes';
    }
    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQA);
};
export default prime;
