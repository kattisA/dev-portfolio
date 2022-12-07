import React from 'react';
import "./about.scss";

function About() {
    return (
        <>
            <div className="about" id="about">
                <div className="left">
                            <ul>
                                <li className="hide-medium"> <img src="assets/grid/marvin-meyer.jpg" alt=""/></li>
                                <li > <img src="assets/grid/sarah-dorweiler.jpg" alt=""/></li>
                                <li className="hide-medium"><img src="assets/grid/kattis_omega.jpg" alt=""/></li>
                                <li><img src="assets/grid/kattis_lejonlid.jpg" alt=""/></li>
                                <li className="hide-medium"><img src="assets/grid/uwc_event.jpeg" alt=""/></li>
                            </ul>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h1>About</h1>
                        <p>This is a section about me</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;