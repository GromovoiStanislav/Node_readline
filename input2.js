const rl = require('readline');

const input = rl.createInterface(process.stdin, process.stdout);

const quest = (question) => {
  return new Promise((resolve) => {
    input.question(question, (answer) => {
      resolve(answer);
    });
  });
};

(async () => {
  let answer = await quest('Введите команду 1:');
  console.log('Ваша команда: ', answer);
  answer = await quest('Введите команду 2:');
  console.log('Ваша команда: ', answer);
  input.close();
})();
