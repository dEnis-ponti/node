const path = require('path')

console.log('nameOfFile: ', path.basename(__filename))

console.log('dir name: ', path.dirname(__filename))

console.log('extension name: ', path.extname(__filename))

console.log('Parse: ', path.parse(__filename))

console.log(path.join(__dirname, 'server', 'index.html'))