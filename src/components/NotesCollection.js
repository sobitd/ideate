import Note from "./Note";
import AddNewNote from "./AddNewNote";
import React from "react";

const NotesCollection = ({ notes }) => {
  return (
    <div className="notes-collection">
      {notes.map((note) => (
        <Note id={note.id} title={note.title} content={note.content} />
      ))}
      <AddNewNote />
    </div>
  );
};

export default NotesCollection;
