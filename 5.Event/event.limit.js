// 1개의 이벤트에 10개 넘는 이벤트 리스너 연결 시 개발자 실수로 간주하여 경고 메세지 발생

// 이벤트 연결 개수 제한 증가. 매개변수가 0일 경우 무한대
process.setMaxListeners(15);
process.on('exit', () => {
  console.log('text1');
});
process.on('exit', () => {
  console.log('text2');
});
process.on('exit', () => {
  console.log('text3');
});
process.on('exit', () => {
  console.log('text4');
});
process.on('exit', () => {
  console.log('text5');
});
process.on('exit', () => {
  console.log('text6');
});
process.on('exit', () => {
  console.log('text7');
});
process.on('exit', () => {
  console.log('text8');
});
process.on('exit', () => {
  console.log('text9');
});
process.on('exit', () => {
  console.log('text10');
});
process.on('exit', () => {
  console.log('text11');
});
