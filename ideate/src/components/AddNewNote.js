import { MdArrowBackIos } from "react-icons/md";

const AddNewNote = () => {
  return (
    <div className="note new-note">
      <div className="note-footer">
        <button className="back">
          <MdArrowBackIos className="back-icon" />
        </button>
        <button className="save">Save</button>
      </div>
      <textarea rows="2" placeholder="Title"></textarea>
      <textarea rows="10" cols="10" placeholder="Type somenthing..."></textarea>
    </div>
  );
};
export default AddNewNote;
