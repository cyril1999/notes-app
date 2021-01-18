
// validate = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')
// text = getNote()

//Process.argv returns the cli arguments entered by user as an array where
//First two elements by default are paths and CLI arguments are obtained
//from 3rd index
//CLI_input = process.argv

//Customize yargs version
yargs.version('1.1.0')

//add, remove, read, list

//Create add command 
yargs.command({
    command:'add',
    describe:'Adds a new note',
    builder: {

        title: {
            describe:"Note title",
            demandOption: true, 
            type:'string'
        },
        body: {
            describe:"Note title",
            demandOption: true, 
            type:'string'
        }
    },
    handler: function (argv) {
        //add function from imported module
        notes.addNote(argv.title, argv.body) 
        // console.log("Add a new note")
     }
})


//Create remove command 
yargs.command({
    command:'remove',
    describe:'Removes new note',
    
    builder: {

        title: {
            describe:"Note title",
            demandOption: true, 
            type:'string'
        }
    },

    handler: function (argv) { 
        
        notes.removeNote(argv.title)
        console.log("Note removed")
     }
})

//Create read command 
yargs.command({
    command:'read',
    describe:'Reads a note',
    builder: {

        title: {
            describe:"Note title",
            demandOption: true, 
            type:'string'
        }
    },
    handler: function () { 
        console.log("Reads a note")
     }
})

//Create list command 
yargs.command({
    command:'list',
    describe:'Lists all notes',
    builder: {

        title: {
            describe:"Note title",
            demandOption: true, 
            type:'string'
        }
    },
    handler: function (argv) { 
        console.log("Lists all notes", argv.title)
     }
})
//Shows contents of yargs.argv
console.log(yargs.argv)