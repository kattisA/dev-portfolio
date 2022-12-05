import React from 'react';
import "./about.scss";

function About() {
    return (
        <>
            <div className="about" id="about">
                <div className="left">
                    <div className="row">
                        <div className="column">
                            <img src="assets/grid/goutham-krishna.jpg" alt=""
                            />
                            <img src="assets/grid/kattis_lejonlid.jpg" alt=""/>
                            <img src="assets/grid/swans.jpg" alt=""/>
                            <img src="assets/grid/uwc_event.jpg" alt=""/>
                            <img src="assets/grid/goutham-krishna.jpg" alt=""/>
                        </div>
                        <div className="column">
                            <img src="assets/grid/kattis_omega.jpg" alt=""/>
                            <img src="assets/grid/cookie.jpg" alt=""/>
                            <img src="assets/grid/lukasz-szmigiel.jpg" alt=""/>
                            <img src="assets/grid/marvin-meyer.jpg" alt=""/>
                            <img src="assets/grid/swans.jpg" alt=""/>
                            <img src="assets/grid/kattis_omega.jpg" alt=""/>
                        </div>
                        <div className="column">
                            <img src="assets/grid/alterlego.jpg" alt=""/>
                            <img src="assets/grid/cookie.jpg" alt=""/>
                            <img src="assets/grid/goutham-krishna.jpg" alt=""/>
                            <img src="assets/grid/kattis_lejonlid.jpg" alt=""/>
                            <img src="assets/grid/swans.jpg" alt=""/>
                            <img src="assets/grid/uwc_event.jpg" alt=""/>
                            <img src="assets/grid/goutham-krishna.jpg" alt=""/>
                        </div>
                        <div className="column">
                            <img src="assets/grid/kattis_omega.jpg" alt=""/>
                            <img src="assets/grid/cookie.jpg" alt=""/>
                            <img src="assets/grid/lukasz-szmigiel.jpg" alt=""/>
                            <img src="assets/grid/marvin-meyer.jpg" alt=""/>
                            <img src="assets/grid/swans.jpg" alt=""/>
                            <img src="assets/grid/kattis_omega.jpg" alt=""/>
                        </div>
                    </div>
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