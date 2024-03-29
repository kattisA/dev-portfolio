import React from 'react';
import "./about.scss";
import { IoIosArrowDown } from "react-icons/io";
import kattis1 from "../../grid/kattis_omega.jpg";
import kattis2 from "../../grid/kattis_lejonlid.jpg";
import marvin from "../../grid/marvin-meyer.jpg";
import sarah from "../../grid/sarah-dorweiler.jpg";
import uwc from "../../grid/uwc_event.jpeg";

function About() {
    return (
        <>
            <div className="about" id="about">
                <div className="left">
                            <ul>
                                <li className="hide-medium"> <img src={marvin} alt="Office desk with computers"/></li>
                                <li className="hide-small"> <img src={sarah} alt="Vase and flower"/></li>
                                <li className="hide-medium"><img src={kattis1} alt="Picture of a smiling system developer"/></li>
                                <li><img src={kattis2} alt="System developer and her coffee"/></li>
                                <li className="hide-medium"><img src={uwc} alt="People attending a meet up"/></li>
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