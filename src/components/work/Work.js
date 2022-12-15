import React, {useState} from 'react';
import "./work.scss";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";

function Work() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
        {
            id: 1,
            title: "VABbis",
            description: "An android app helping parents administrate the sick leave of their children",
            image: "assets/projects/vabbis.jpg"
        },
        {
            id: 2,
            title: "Activity chooser",
            description: "An android app helping you pick random activities",
            image: "assets/projects/activities_start.png"
        },
        {
            id: 3,
            title: "Dinner spinner",
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
            <div className="work" id="work">
                <div
                    className="slider"
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                >
                    {cards.map((card) => (
                        <div className="container">
                            <div className="card">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">Hello</div>
                                        <h2>{card.title}</h2>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={card.image} alt={card.title}/>
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

export default Work;