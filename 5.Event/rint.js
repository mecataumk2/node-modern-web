// 모듈 파일 입니다. app.js를 실행 해 주세요.

// EventEmitter 객체 생성
const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter { }

exports.timer = new MyEventEmitter();

// 이벤트 발생
setInterval(() => {
  exports.timer.emit('tick');
}, 1000);
