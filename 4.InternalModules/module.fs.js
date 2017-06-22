const fs = require('fs');

// 비동기식 읽기 처리
fs.readFile('4.InternalModules/textfile.txt', 'utf8', (error, data) => {
  console.log('\u001b[31m\n', data, '\u001b[0m');
});

// 동기식 읽기 처리
const syncText = fs.readFileSync('4.InternalModules/textfile.txt', 'utf8');
console.log(syncText);

// 비동기식 쓰기 처리
const someText = 'Hello world.\nLine number 2.\nLine number 3.\n한글데이터.';
fs.writeFile('writtenAsyncFile.txt', someText, 'utf8', (error) => {
  console.log('WRITE FILE ASYNC COMPLETE');
});

// 동기식 쓰기 처리
fs.writeFileSync('writtenSyncFile.txt', someText, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');
