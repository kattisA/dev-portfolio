import './app.scss';
import TopBar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import {useState} from "react";
import About from "./components/about/About";
import Apps from "./components/apps/Apps";
import Pages from "./components/pages/Pages";
import Lectures from "./components/lectures/Lectures";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
      <div className="app">
          <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="sections">
              <About />
              <Apps />
              <Pages/>
              <Lectures/>
          </div>
      </div>
  );
}

export default App;
