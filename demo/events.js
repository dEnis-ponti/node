const EventEmitter = require('events')

const testEmitter = new EventEmitter()

// testEmitter.on('anything', data => {
//   console.log('ON: anything', data);
// })

// testEmitter.emit('anything', {a: 1})
// testEmitter.emit('anything', {b: 2})

// setTimeout( () => {
//   testEmitter.emit('anything', {c: 3})
// }, 1500)

class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('[Subscribe...]')
    this.on(eventName, cb)
  }

  dispatch(eventName, data) {
    console.log('[Dispatching]')
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
  console.log('ON: aa', data);
})

dis.dispatch('aa', {aa: 22})