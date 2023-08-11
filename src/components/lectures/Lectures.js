import React from "react";
import "./lectures.scss";

function Lectures() {
    const lecturesList = [
        {
            title: "Kotlin Workshops with Android Studio",
            location: "Aurora Innovations",
            year: "2018"
        },
        {
            title: "Kotlin Workshop with Android Studio",
            location: "Uppsala Women Coding",
            year: "2018"
        },
        {
            title: "Android Studio tool guide",
            location:"Uppsala Women Coding @Consid",
            year:"2019"
        },
        {
            title: "How to use git on terminal",
            location: "Omegapoint conference, 2020",
            year: "2020",
        },
        {
            title: "How to use git on terminal",
            location: "Uppsala Women Coding, 2020",
            year: "2020",
        },
        {
            title: "JPA Data Query Creation",
            location: "Omegapoint conference, 2021",
            year: "2021",
        },
        {
            title: "Learn the basics of Git",
            location: "Uppsala Women Coding at Consid, 2022",
            year: "2022",
        },
        {
            title: "Gitk- five minute talk",
            location: "Internal meeting at NBIS, 2022",
            year: "2022",
        },
        {
            title: "Terminal workshop for Uppsala women coding",
            location: "2022",
            year: "2022",
        },
        {
            title: "Accessibility for front end developers",
            location: "NBIS conference, 2023",
            year: "2023",
        },
    ]
    return (
        <div className="lectures" id="lectures">
            <h2>Lectures</h2>
            <div className="lectureList">
                {lecturesList.map((lecture, index) => (
                        <div className="lectureItem" key={index}>
                            <div className="title">
                                {lecture.title}
                            </div>
                            <div className="locationYear">
                                {lecture.year} - {lecture.location}
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default Lectures;