console.log('Starting personal note app project')

// requiring fs and os modules to create and require our own notes files

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv
var command = argv._[0]
console.log('Command', command)
console.log('Yargs', argv)

if (command === 'add'){
    notes.addNote(argv.title, argv.body)
} else if(command === 'list') {
    notes.getAll()
} else if(command === 'read') {
    notes.getNote(argv.title)
} else if (command === 'remove'){
    notes.removeNote(argv.title)
} else
console.log('Command not recognized')


