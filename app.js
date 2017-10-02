console.log('Starting personal note app project')

const fs = require('fs')
const os = require('os')


var user =os.userInfo()

fs.appendFile('noteAppProject.txt', `Personal project note app by ${user.username}!`)
