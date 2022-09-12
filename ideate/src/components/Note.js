import { AiOutlineDelete } from "react-icons/ai";

const Note = () => {
  return (
    <div className="note">
      <span> Note me </span>
      <div className="note-footer">
        <small>date</small>
        <AiOutlineDelete className="deleteIcon" />
      </div>
    </div>
  );
};

export default Note;
