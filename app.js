console.log('Starting personal note app project')

// requiring fs and os modules to create and require our own notes files

const fs = require('fs')
const _ = require('lodash')

const notes = require('./notes')

var command = process.argv[2]
console.log('Command', command)
console.log(process.argv)

if (command === 'add'){
    console.log('Adding new note')
} else if(command === 'list') {
    console.log('Listing all notes')
} else if(command === 'read') {
   console.log('Fetching note')
} else if (command === 'remove'){
    console.log('Removing note')
} else
console.log('Command not recognized')


