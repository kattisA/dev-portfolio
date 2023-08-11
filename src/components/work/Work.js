import React from "react";
import "./work.scss";

function Work() {
    const workList = [
        {
            title: "Front end Developer at NBIS",
            description: "Front end development in scrum team in the field of bioinformatics, developing applications " +
                "for researchers to present and visualize their data. Using new frameworks and libraries to maintain " +
                "good knowledge of the field",
            year: "2022- "
        },
        {
            title: "System Developer Consultant at Omegapoint",
            description: "Description of job 2...",
            year:"2019-2022"
        },
    ];

    return (
        <div className="work" id="work">
            <h2>Work experience</h2>
            <div className="row">
                {workList.map((workItem, index) => (
                    <div className="column" key={index}>
                        <div className="basicCard workCard ">
                            <div className=" title">
                                <h3 className="cardTitle">{workItem.title}</h3> {workItem.year}
                            </div>
                            <div>{workItem.description}</div>

                        </div>
                    </div>
                ))}
            </div>
            <div>
                Check out more details in my <a href="https://www.linkedin.com/in/lejonlidkatarina/" target="_blank">
                    LinkedIn
                </a> account.
            </div>
            <div>
               Acknowledgements: Marvin Mayer etc....
            </div>
        </div>
    );
}
export default Work;