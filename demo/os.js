const os = require('os')

console.log('OS', os.platform())

console.log('Архитектура Проца ', os.arch())

console.log('info CPU ', os.cpus())

console.log('free RAM ', os.freemem())

console.log('all RAM ', os.totalmem())

console.log('home dir ', os.homedir())

console.log('os lifetime ', os.uptime())