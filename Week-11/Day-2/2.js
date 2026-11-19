const EventEmitter = require('events')

var ee = new EventEmitter();


ee.on('chintu', function () {
  console.log('hello chintu')
})

ee.on('message', function (text) {
    ee.emit('chintu','welcome to my school')
  console.log(text);
})
ee.emit('message', 'hello world');
ee.emit('chintu');