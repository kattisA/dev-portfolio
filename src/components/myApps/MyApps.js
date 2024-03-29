import React, {useState} from 'react';
import "./myApps.scss";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
import {arrowBox} from "../pages/Pages";

function MyApps() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
        {
            id: "1",
            title: "VABbis",
            icon: "assets/projects/vabbis-icon.png",
            description: "An android app helping parents administrate the sick leave of their children",
            image: "assets/projects/vabbis.jpg"
        },
        {
            id: "2",
            title: "Activity chooser",
            icon: "assets/projects/activities-icon.png",
            description: "An android app helping you pick random activities",
            image: "assets/projects/activities_start.png"
        },
        {
            id: "3",
            title: "Dinner spinner",
            icon: "assets/projects/dinnerspinner-icon.png",
            description: "Randomly choose your dinner! It can be whatever!",
            image: "assets/projects/dinner_spinner.png"
        }
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < cards.length - 1 ? currentSlide + 1 : 0);
    };

    return (
            <div className="myApps" id="myApps">
                <div className="pageTitle">
                    <h2>My apps</h2>
                </div>
                <div
                    className="slider"
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                >
                    {cards.map((card) => (
                        <div className="container">
                            <div className="appsCard">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={card.icon} alt={card.title + " icon"} />
                                        </div>
                                        <h2>{card.title}</h2>
                                        <p>{card.description}</p>
                                        <a href="https://play.google.com/store/apps/dev?id=7651662941074201152&hl=sv&gl=US" className="button">  Visit </a>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={card.image} alt={card.title}/>
                                    <h2 className="mobileCard">{card.title}</h2>
                                    <p className="mobileCard">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <IoIosArrowBack className="arrow left"
                                alt="arrow"
                                onClick={() => handleClick("left")}
                />
                <IoIosArrowForward  className="arrow right"
                                    alt="arrow"
                                    onClick={() => handleClick("right")}
                />
            </div>
    );
}

export default MyApps;