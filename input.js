const rl = require('readline');

const input = rl.createInterface(process.stdin, process.stdout);

input.on('line', (line) => {
  if (line === 'quit') {
    input.close();
  } else {
    console.log('Line: ', line);
  }
});

input.question('Введите команду:', (cmd) => {
  console.log('Command: ', cmd);
});

input.on('close', () => {
  console.log('Finish');
});
