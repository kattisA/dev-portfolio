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
                            I'm a dynamic front-end developer with a passion for crafting beautiful and interactive
                            components that bring websites to life. Armed with a solid foundation in computer science
                            and a seamless transition from another industry, I bring a unique perspective to the world
                            of web development.
                        </div>
                        <div className="text hide-small">
                            I love staying updated with the latest technologies and tools, and I'm particularly
                            enthusiastic about version control with Git. Whether it's creating eye-catching UI/UX
                            designs or collaborating with fellow developers, I'm always eager to learn, grow,
                            and share my expertise. Catch me at meetups and lectures where we can geek out together
                            on all things front-end and Git!
                        </div>
                    </div>
                    <div>
                        <a href="#apps">
                            <IoIosArrowDown className="icon" />
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;