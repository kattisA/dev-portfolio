import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#work">Work</a>
        </li>
        <li>
            <a href="https://github.com/kattisA" target="_blank">
                <img src="assets/github.png" alt="github icon" />
                GitHub
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/lejonlidkatarina/" target="_blank">
                <img src="assets/linkedin.png" className="smaller" alt="linkedin icon" />
                LinkedIn
            </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
