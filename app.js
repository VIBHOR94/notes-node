console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv
var command = argv._[0]
console.log('Command:', command)
console.log('Yargs', argv)

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if(note === undefined) {
    console.log('Note title taken.')
  }
  else{
    console.log('Note created')
    notes.logNote(note)
  }
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  var recievedNote = notes.getNote(argv.title)
  if(recievedNote === undefined) {
    console.log('Cannot find note.')
  }
  else{
    console.log('Node recived.')
    notes.logNote(recievedNote)
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Note was removed.' : 'Note was not removed.'
  console.log(message)
} else {
  console.log('Command not recognized.')
}