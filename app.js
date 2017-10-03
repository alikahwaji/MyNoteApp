console.log('Starting personal note app project')

// requiring fs and os modules to create and require our own notes files

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes')


console.log(_.isString(true))
console.log(_.isString('Ali'))

var filterArray = _.uniq(['Ali', 1, 'Ali', 1, 3, 4, 5])
console.log(filterArray)
// var res = notes.addNumbers()
// console.log(res)
// var user =os.userInfo()

// fs.appendFile('noteAppProject.txt', `Personal project note app by ${user.username}! You are ${notes.age}.`)
