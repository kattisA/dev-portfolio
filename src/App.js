import logo from './logo.svg';
import './App.css';
import TopBar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import {useState} from "react";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
      <div className="App">
          <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="sections">

          </div>
      </div>
  );
}

export default App;
