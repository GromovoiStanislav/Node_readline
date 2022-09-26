const rl = require('readline');

const input = rl.createInterface(process.stdin, process.stdout);

const quest = (question) => {
  return new Promise((resolve) => {
    input.question(question, (answer) => {
      resolve(answer);
    });
  });
};

quest('Введите команду 1:')
  .then((answer) => {
    console.log('Ваша команда: ', answer);
    return quest('Введите команду 2:');
  })
  .then((answer) => {
    console.log('Ваша команда: ', answer);
  })
  .finally(() => input.close());
