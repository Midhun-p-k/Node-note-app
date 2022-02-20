const yargs = require("yargs")
const { addNotes } = require("./notes")
const notes = require("./notes")


yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder:{
    title:{
      describe:"note title",
      demandOption:true,
      type:"string",
    },
    body:{
      describe:"the para that wanted to add to the note",
      demandOption:true,
      type:"string"
    }
  },
  handler (argv) {
      notes.addNotes(argv.title,argv.body)
  }
})

yargs.command({
  command:"remove",
  describe:"remove a note",
  builder:{
    title:{
      description:"note tile",
      demandOption:true,
      type:"string"
    }
  },
  handler(argv){
    notes.removeNotes(argv.title)
  }
})

yargs.command({
  command:"list",
  describe:"list the  notes",
  handler(argv){
    notes.listNotes(argv.title)
  }
})

yargs.command({
  command:"read",
  describe:"read a note",
  builder:{
    title:{
      description:"note tile",
      demandOption:true,
      type:"string"
    }
  },
  handler(argv){
    notes.readNotes(argv.title)
  }
})




// console.log(yargs.argv)
yargs.parse();