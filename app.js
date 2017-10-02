console.log('Starting personal note app project')

// requiring fs and os modules to create and require our own notes files

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

var res = notes.addNumbers()
console.log(res)
// var user =os.userInfo()

// fs.appendFile('noteAppProject.txt', `Personal project note app by ${user.username}! You are ${notes.age}.`)
