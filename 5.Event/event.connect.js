process.on('exit', (error) => {
  console.log('잘 가라...!');
  console.log(error);
});

// process.on('uncaughtException', (error) => {
//   console.log('예외 발생! 살려는 주지.');
//   console.log(error);
// });

// 이벤트를 1회만 연결
process.once('uncaughtException', (error) => {
  console.log('예외 발생! 살려는 주지.');
  console.log(error);
});

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
