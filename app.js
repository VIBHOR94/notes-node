console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')

const notes = require('./notes.js')

var command = process.argv[2]
console.log('Command:', command)

if (command === 'add') {
  console.log('Add new note.')
} else if (command === 'list') {
  console.log('Listing all nodes.')
} else if (command === 'read') {
  console.log('Reading a node.')
} else if (command === 'remove') {
  console.log('Removing node.')
} else {
  console.log('Command not recognized.')
}