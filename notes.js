const fs = require("fs");
const chalk = require("chalk");


const addNotes = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note)=> note.title === title)

  const duplicateNote = notes.find((note) => note.title === title);
    
  debugger;
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.bold("Note is added"));
  } else {
    console.log(chalk.red.bold("Title is already taked"));
  }
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  

  if (note) {
    console.log(chalk.inverse.blue(note.title));
    console.log(chalk.inverse.white(note.body));
    console.log(chalk.bold.green("The given note is readed"));
  } else {
    console.log(chalk.bold.red("Note not found"));
  }
};

const listNotes = (title) => {
  const notes = loadNotes();
  console.log(chalk.red.bgWhite("Your Notes..."));
  notes.forEach((note) => {
    console.log(chalk.blue.bold(note.title));
  });
};

const removeNotes = (title) => {
  console.log(`object with title ${title} is removed form the note`);

  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note)=> note.title === title)
  const duplicateNote = notes.find((note) => note.title === title);

  if (duplicateNote) {
    const updatedNote = notes.filter((note) => {
      return note.title !== title;
    });
    saveNotes(updatedNote);
    console.log(chalk.bold.green("The given note is removed"));
  } else {
    console.log(chalk.bold.red("The given title is not in the file"));
  }
};



const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
