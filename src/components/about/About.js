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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda beatae
                            consectetur consequatur dignissimos excepturi facilis, illo laborum, magnam nulla obcaecati
                            optio perspiciatis praesentium quaerat sed velit voluptas voluptate voluptatibus.
                        </p>
                        <p className="hide-small">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda beatae
                            consectetur consequatur dignissimos excepturi facilis, illo laborum, magnam nulla obcaecati
                            optio perspiciatis praesentium quaerat sed velit voluptas voluptate voluptatibus.
                        </p>
                    </div>
                    <div>
                        <a href="#work">
                            <IoIosArrowDown className="icon" />
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;