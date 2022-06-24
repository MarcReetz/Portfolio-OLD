import "./App.css";
import Intro from "../../features/Intro/Intro";
import Navbar from "../NavBar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="App">
        <Intro />
      </main>
    </div>
  );
}

export default App;
