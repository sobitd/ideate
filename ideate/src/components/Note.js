import { AiOutlineDelete } from "react-icons/ai";
import React from "react";

const Note = ({title,content}) => {
  return (
    <div className="note">
      <h2> {title}</h2>
      <p> {content}</p>
      <div className="note-footer">
        <button>edit</button>
        <AiOutlineDelete className="deleteIcon" />
      </div>
    </div>
  );
};

export default Note;
