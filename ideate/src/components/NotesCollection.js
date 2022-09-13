import Note from "./Note";
import AddNewNote from "./AddNewNote";

const NotesCollection = () => {
  return (
    <div className="notes-collection">
      <Note />
      <AddNewNote />
    </div>
  );
};

export default NotesCollection;
