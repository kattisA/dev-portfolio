import "./topbar.scss";
import { GoPerson, GoMail } from "react-icons/go";

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
                        <span>About</span>
                    </div>
                    <div className="itemContainer">
                        <span>Work</span>
                    </div>
                    <div className="itemContainer">
                        <img src="assets/github.png" alt="" />
                        <img src="assets/linkedin.png" className="smaller" alt="" />
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