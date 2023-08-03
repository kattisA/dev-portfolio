import "./topbar.scss";

function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topBar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        Portfolio
                    </a>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <a href="#about" className="link">
                            <span>About</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="#apps" className="link">
                           <span>Apps</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/kattisA" target="_blank">
                            <img src="assets/github.png" alt="github icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/lejonlidkatarina/" target="_blank">
                            <img src="assets/linkedin.png" className="smaller" alt="linkedin icon" />
                        </a>

                    </div>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;