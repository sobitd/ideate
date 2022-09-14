import NotesCollection from "./components/NotesCollection";
import Navbar from "./components/navbar";
import React, { useEffect, useState } from "react";

const App = () => {
  
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main class="container">
        <NotesCollection/>
      </main>
    </div>
  );
};

export default App;
