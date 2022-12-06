import React from 'react';
import "./about.scss";

function About() {
    return (
        <>
            <div className="about" id="about">
                <div className="left">
                            <ul className="image-gallery">
                                <li><img src="assets/grid/lukasz-szmigiel.jpg" alt=""/></li>
                                <li><img src="assets/grid/kattis_omega.jpg" alt=""/></li>
                                <li> <img src="assets/grid/cookie.jpg" alt=""/></li>
                                <li> <img src="assets/grid/goutham-krishna.jpg" alt=""
                                /></li>
                                <li><img src="assets/grid/kattis_lejonlid.jpg" alt=""/></li>
                                <li><img src="assets/grid/uwc_event.jpeg" alt=""/></li>
                                <li> <img src="assets/grid/marvin-meyer.jpg" alt=""/></li>
                                <li><img src="assets/grid/swans.jpg" alt=""/></li>
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