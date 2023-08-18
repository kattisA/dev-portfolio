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
            description: "Full-stack System development of Web applications in health care " +
                "Techniques such as Java 11, Angular, React, Wicket 8, SQL, Hibernate, JPA, maven and docker. " +
                "Atlassian tools stuck as Jira, Bitbucket and pipelines.\n" +
                "\n" +
                "Also experience of Android app in the field of health care. Android Studio, Gradle and Google Play Console.",
            year:"2019-2022"
        },
        {
            title: "System DeveloperSystem Developer Aurora Innovation",
            description: "System developer for cloud-based telephone solution Aurora TeleQ mainly building new features " +
                "improving functionality and usability. Java and Ajax Web application framework (zk) with MVVM. MongoDB, " +
                "Git, Angular, HTML, CSS, JavaScript.",
            year:"2018-2019"
        },
        {
            title: "Previous work experience as analyst, evaluator and social worker",
            description: "Started of as a social worker in the municipality of Uppsala and then worked as a research " +
                "analyst and evaluator in the The National Board of Health and Welfare, a government agency in Sweden.",
            year:"2004-2014"
        },
    ];

    return (
        <div className="work" id="work">
            <h2 className="workTitle">Work Experience</h2>
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
            <div className="hide-mobile">
                Check out more details in my <a href="https://www.linkedin.com/in/lejonlidkatarina/" target="_blank" rel="noreferrer">
                LinkedIn
            </a> account.
            </div>
            <div className="extra">
                Acknowledgements for photographs: Marvin Mayer and Sarah Dorweiler.
            </div>

        </div>
    );
}
export default Work;