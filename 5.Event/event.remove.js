process.on('exit', (error) => {
  console.log('잘 가라...!');
  console.log(error);
});

const onUncaughtException = (error) => {
  console.log('예외 발생! 첫 번째는 살려는 주지.');
  console.log(error);
  process.removeListener('uncaughtException', onUncaughtException);
};

process.on('uncaughtException', onUncaughtException);

let count = 0;
const test = () => {
  // Exit 코드
  count += 1;
  if (count > 3) { return; }

  // 예외 발생
  setTimeout(test, 2000);
  error.error.error();
};
setTimeout(test, 2000);
