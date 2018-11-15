console.log('Starting notes.js')

var addNote = (title, body) => {
  console.log('Add notes', title, body)
}

var getAll = () => {
  console.log('Listing all notes.')
}

var getNote = (title) => {
  console.log('Getting note', title)
}

var removeNote = (title) => {
  console.log('Removing note', title)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}