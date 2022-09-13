import NotesCollection from "./components/NotesCollection";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main class="container">
        <NotesCollection />
      </main>
    </div>
  );
};

export default App;
