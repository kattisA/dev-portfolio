import React from 'react';
import "./about.scss";
import { IoIosArrowDown } from "react-icons/io";

function About() {
    return (
        <>
            <div className="about" id="about">
                <div className="left">
                            <ul>
                                <li className="hide-medium"> <img src="assets/grid/marvin-meyer.jpg" alt=""/></li>
                                <li className="hide-small"> <img src="assets/grid/sarah-dorweiler.jpg" alt=""/></li>
                                <li className="hide-medium"><img src="assets/grid/kattis_omega.jpg" alt=""/></li>
                                <li><img src="assets/grid/kattis_lejonlid.jpg" alt=""/></li>
                                <li className="hide-medium"><img src="assets/grid/uwc_event.jpeg" alt=""/></li>
                            </ul>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h1>About</h1>
                        <div className="text">
                            My name is Katarina Lejonlid and I am a front-end developer that enjoys to create nice
                            looking components.  I want to stay updated with new technologies and tools, and
                            I have a particular interest in version control with Git. Whenever I have the opportunity
                            I will share my knowledge in meet ups or at work.
                        </div>
                        <div className="text hide-small">
                            My developer foundation is in computer science and I also have working experience in the social field.
                            Apart from computer science I enjoy spending time with my family and friends,
                            listening to and playing music.
                        </div>
                    </div>
                    <div>
                        <a href="#myApps">
                            <IoIosArrowDown className="icon" />
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;