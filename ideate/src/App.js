import NotesCollection from "./components/NotesCollection";
import Navbar from "./components/navbar";
import React, { useEffect, useState } from "react";
const App = () => {
  const [dispNotes, setDispNotes] = useState([]);

  useEffect(() => {
    fetch("https://ideatenotes.herokuapp.com/notes")
      .then((res) => res.json())
      .then((dispNotes) => {
        setDispNotes(dispNotes);
      });
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main class="container">
        <NotesCollection notes={dispNotes} />
      </main>
    </div>
  );
};

export default App;
