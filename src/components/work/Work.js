import React from "react";
import "./work.scss";

function Work() {
    const workList = [
        {
            title: "NBIS",
            description: "Front end development in scrum team in the field of bioinformatics, developing applications " +
                "for researchers to present and visualize their data. Using new frameworks and libraries to maintain " +
                "good knowledge of the field",
            year: "2022- "
        },
        {
            title: "Job Title 2",
            description: "Description of job 2...",
            year:"2019-2022"
        },
        // Add more items as needed
    ];

    return (
        <div className="work" id="work">
            <h2>Work experience</h2>
            <div className="row">
                {workList.map((workItem, index) => (
                    <div className="column" key={index}>
                        <div className="card">
                            <h3>{workItem.title}</h3>
                            <div>{workItem.year}</div>
                            <p>{workItem.description}</p>

                        </div>
                    </div>
                ))}
            </div>
            <div>
                Check out more details in my <a href="https://www.linkedin.com/in/lejonlidkatarina/" target="_blank">
                    LinkedIn
                </a> account.
            </div>
        </div>
    );
}
export default Work;