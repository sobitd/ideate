import Note from "./Note";
import AddNewNote from "./AddNewNote";
import React, { useEffect, useState } from "react";



const NotesCollection = () => {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("https://ideatenotes.herokuapp.com/notes")
      .then((res) => res.json())
      .then((notes) => setNotes(notes));
  }, []);


  function handleAddNewNote(newNote){
    setNotes([...notes,newNote])
  }


  return (
    <div className="notes-collection">
      {notes.map((note) => (
        <Note title={note.title} content={note.content} />
      ))}
      <AddNewNote onAddNewNote={handleAddNewNote} />
    </div>
  );
};

export default NotesCollection;
