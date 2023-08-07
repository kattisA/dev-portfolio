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