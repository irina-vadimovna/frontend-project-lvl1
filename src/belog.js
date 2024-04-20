import readlineSync from 'readline-sync';

export function greeting() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

function getRandomInt(min, max) {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
}

export function num() {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInt(1, 999);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (
      (randomNum % 2 === 0 && userAnswer === 'yes')
      || (randomNum % 2 !== 0 && userAnswer === 'no')
    ) {
      console.log('Correct!');
    } else {
      console.log("Let's try again!");
      break;
    }
    if (i === 2) {
      console.log('Congratulations!');
    }
  }
}
