import Note from "./Note";
import AddNewNote from "./AddNewNote";
import { VscAdd } from "react-icons/vsc";

const NotesCollection = () => {
  return (
    <div className="notes-collection">
      <Note />
      <button><VscAdd/></button>
      <AddNewNote trigger={true} />
    </div>
  );
};

export default NotesCollection;
