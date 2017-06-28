process.on('exit', (code) => {
  console.log('안녕히 계시소 .. !');
});

// 프로그램 종료

process.exit();

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

// 프로그램 실행 중.
console.log('프로그램은 여전히 실행 중... 죽지 아나!');
