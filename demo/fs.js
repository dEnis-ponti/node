// File System
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }

//   console.log('Folder Done!');
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello Node Fags', err => {
//   if (err) {
//     throw err
//   }

//   console.log('Файл Текстик DONE!');
//   fs.writeFile(filePath, '\nHello for NEVER!', err => {
//     if (err) {
//       throw err
//     }
//   })
//   fs.appendFile(filePath, '\nOppa, New Data...', err => {
//     if (err) {
//       throw err
//     }
//     console.log('plus Data Done');
//   })
// })

// fs.readFile(filePath, (err, content) => {
//   if (err) {
//     throw err    
//   }

//   const data = Buffer.from(content)
//   console.log('Content: ', data.toString())
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
  if(err) {
    throw err
  }
  console.log(content);
})