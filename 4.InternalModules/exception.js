const fs = require('fs');

// 비동기식 처리에 대한 예외 처리
fs.readFile('4.InternalModules/notextfile.txt', 'utf8', (error, data) => {
  if (error) {
    return console.log(error);
    // console.log('\u001b[31m', 'Attributes of error are:', '\u001b[0m');
    // console.log(error.code);
    // console.log(error.message);
    // console.log(error.stack);
  }
  console.log(data);
});

// 동기식 처리에 대한 예외 처리
// try {
//   const syncText = fs.readFileSync('4.InternalModules/noExistFile.txt', 'utf8');
//   console.log(syncText);
// } catch (e) {
//   console.log(e.code);
//   console.log(e.message);
//   console.log(e.stack);
// }
