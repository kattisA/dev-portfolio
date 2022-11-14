import './app.scss';
import TopBar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import {useState} from "react";
import About from "./components/about/About";
import Work from "./components/work/Work";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
      <div className="app">
          <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="sections">
              <About />
              <Work />
          </div>
      </div>
  );
}

export default App;
