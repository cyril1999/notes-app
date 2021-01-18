const fs = require('fs')

const getNotes = function () {

    return "My notes"
  }
//load existing notes and append our note to it
const addNote = function (title, body) {
  
  const notes = loadNotes()
  
  //Check whether title already exists
  //This filter gets called for every add command called 
  //Here note is an element of the array of 'notes' O(N)
  //We've modified filter to suit our need of checking user entered. Title against title of each note, hence filter is called until
  //it traverses all objects in the array of notes, returns true if match and false if not for each object check
  //So basically filter sends a boolean array to duplicate notes
  const duplicateNotes = notes.filter(function (note) {

    return note.title===title
    })

    if (duplicateNotes.length === 0) {
     
        //push function pushes object to array returned by loadNotes
        notes.push({
          title: title,
          body: body
        })

        // console.log(notes)
        saveNotes(notes) 
        console.log('Note added')      
    } 
    else {
      console.log('Note title exists')    
    }
}

//Stringifies object and writes it to file
const saveNotes = function (notes) {

  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)

}



const loadNotes = function () {

  //Check if this file is present and if not try a remedy
  try {
   
  const dataBuffer = fs.readFileSync('notes.json')
  const dataJSON = dataBuffer.toString()
  //returns JS object
  return JSON.parse(dataJSON)
    
  } catch (error) {
    
    //returns empty array if no notes were craeated
    return []
  }

  }

//Remove Note function
const removeNote = function (title) { 
  
  const notes = loadNotes()

  //Notes that need not be deleted
  const notesToKeep = notes.filter(function (note) {

    //WHen it returns true it will add that object to array
    //Basically whatever gives output as true is added to array
    //NOte that matches title won't be added to array
    return note.title !== title
    })

  //If note was deleted size of notesToKeep will be lesser than notes
  
  if (notesToKeep.length < notes.length) {
    
    console.log('Note has been removed')
    //notesToKeep will contain the array of notes not to be deleted
    saveNotes(notesToKeep)  
    
  } else {
    
    console.log('Note is not present')
  }
  

  console.log(title)
 }
 //listNotes function
 const listNotes = function (title) { 
  
  const notes = loadNotes()

  //Notes that need not be deleted
  const notesToKeep = notes.filter(function (note) {

    //WHen it returns true it will add that object to array
    //Basically whatever gives output as true is added to array
    //NOte that matches title won't be added to array
    return note.title !== title
    })

  //If note was deleted size of notesToKeep will be lesser than notes
  
 }

// readNote
const readNote = function (title) { 
  
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title )

  if (note) {
    console.log(note.body)
  }
  else{
    console.log('NOte not found')
  }
  //Notes that need not be deleted
  const notesToKeep = notes.filter(function (note) {

    //WHen it returns true it will add that object to array
    //Basically whatever gives output as true is added to array
    //NOte that matches title won't be added to array
    return note.title !== title
    })

  //If note was deleted size of notesToKeep will be lesser than notes
  
 }

//exports when multiple, export when single
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}