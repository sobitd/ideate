import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

function AddNewNote() {
  return(
    <div className="note new-note">
      <div className="note-header">
        <button className="back">
          <MdKeyboardArrowLeft className="back-icon" />
        </button>
        <button className="save">Save</button>
      </div>
      <textarea rows="2" placeholder="Title"></textarea>
      <textarea rows="10" cols="10" placeholder="Type somenthing..."></textarea>
    </div>
  )
}
export default AddNewNote;
