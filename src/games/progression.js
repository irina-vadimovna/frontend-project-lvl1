import { runGame, getRandomInt } from '../index.js';

const arr = () => {
  const step = getRandomInt(1, 10);
  const firstNum = getRandomInt(1, 20);
  const array = [firstNum];

  let temp = firstNum + step;
  for (let i = 0; i < 9; i += 1) {
    array.push(temp);
    temp += step;
  }
  return array;
};

const progression = () => {
  const gameRules = 'What number is missing in the progression?';

  const getQA = () => {
    const newArray = arr();
    const randomIndex = getRandomInt(0, 9);

    const element = newArray[randomIndex];
    newArray[randomIndex] = '..';

    const question = newArray.join(' ');
    const correctAnswer = element.toString();
    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQA);
};
export default progression;
