import NotesCollection from "./components/NotesCollection";
import Navbar from "./components/navbar";
import React, { useEffect, useState } from "react";
const App = () => {

  const[notes,setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/notes")
    .then((res) => res.json())
    .then((notes) => setNotes(notes))
  },[]);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main class="container">
        <NotesCollection notes = {notes}/>
      </main>
    </div>
  );
};

export default App;
