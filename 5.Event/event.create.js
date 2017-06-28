const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const custom = new MyEmitter();
custom.on('tick', (code) => {
  console.log('이벤트를 실행합니다. ^_^');
});

custom.emit('tick');
