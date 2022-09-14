import React, { useState } from "react";

function AddNewNote( {onAddNewNote}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submittedNote, setSubmittedNote] = useState([]);

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleContent(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      title: title,
      content: content,
    };
    const notesArray = [...submittedNote, formData];
    setSubmittedNote(notesArray);
    setTitle("");
    setContent("");

    fetch("https://ideatenotes.herokuapp.com/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => r.json())
    .then((newNote) => onAddNewNote(newNote))
  }

  return (
    <div className="note new-note">
      <form onSubmit={handleSubmit}>
        <div className="note-header">
          <button className="back">Back</button>
        </div>

        <input
          type="text"
          placeholder="Title"
          style={{ height: "50px", width: "90%", margin: "10px" }}
          onChange={handleTitle}
          value={title}
        />
        <input
          type="text"
          placeholder="Type soemthing..."
          style={{ height: "200px", width: "90%", margin: "10px" }}
          onChange={handleContent}
          value={content}
        />
        <button type="submit" className="save">
          Save
        </button>
      </form>
    </div>
  );
}
export default AddNewNote;
