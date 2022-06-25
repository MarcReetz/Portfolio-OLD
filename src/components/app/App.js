import "./App.css";
import Intro from "../../features/Intro/Intro";
import Navbar from "../NavBar/Navbar";
import { useState } from "react";
import NavbarExtended from "../NavBar/NavbarExtended";

function App() {

  const [NavOpen,setNavOpen] = useState(false);

  const toogleNav = () => {
    setNavOpen(NavOpen ? false : true)
  };

  return (
    <div>
      <Navbar navOpen= {NavOpen} onClick= {toogleNav}/>
      { NavOpen && <NavbarExtended onClick={toogleNav}/>}
      <main className="App">
        <Intro />
      </main>
    </div>
  );
}

export default App;
