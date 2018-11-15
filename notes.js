console.log('Starting notes.js')

const fs = require('fs')


var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json')
    return JSON.parse(noteString)
  } catch (e) {
    return []
  }
}

var saveNote = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
  var notes = fetchNotes()
  var note = {
    title,
    body
  }

  var duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length == 0) {
    notes.push(note)
    saveNote(notes)
    return note
  }
}

var getAll = () => {
  console.log('Listing all notes.')
}

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title)
  var searchedNote = filteredNotes.length > 0 ? filteredNotes[0] : undefined
  return searchedNote
}

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title)
  saveNote(filteredNotes)
  return notes.length !== filteredNotes.length
}

var logNote = (note) => {
  console.log('____')
  console.log(`Title: ${note.title}`)
  console.log(`Body: ${note.body}`)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}