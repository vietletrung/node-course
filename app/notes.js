const fs = require('fs')

const addNote = (title, body) => {
 const notes = loadNotes()
 const duplicates = notes.filter((note) => note.tile == title)
 if(duplicates.length == 0)
 {
    notes.push({
        tile: title,
        body: body
    })

//fs.writeFileSync('notes.json',notes.toString())
    saveNotes(notes)
 }
 else {
     console.log('duplidate')
 }
}

const listNote = () =>{
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(element.tile + ', ' + element.body)
    });
}

const readNote =(title) => {
    const notes = loadNotes()
    debugger
    console.log(notes.find((note) => note.tile == title))
}

const removeNote = function(title){
    
}

const getNotes = function (){
    return 'get notes'
}

const saveNotes = function(notes){
const jsonData = JSON.stringify(notes);
fs.writeFileSync('notes.json', jsonData)

}

const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataString = dataBuffer.toString()
    return JSON.parse(dataString)
    }
    catch{

        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    listNote: listNote,
    readNote: readNote
}