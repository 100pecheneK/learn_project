const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), err => {
//     if(err){
//         throw err
//     }
//     console.log('Папка создана')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')
//
// fs.writeFile(filePath, 'Hello test.txt', err => {
//     if (err) {
//         throw err
//     }
//
//     console.log('Файл создан')
//
//     fs.appendFile(filePath, '\nHello test.txt', err => {
//         if (err) {
//             throw err
//         }
//
//         console.log('Файл обновлён')
//
//     })
// })


fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    console.log(content)
})