import React, {useState} from 'react';
import "./pages.scss";

function Pages() {
    const pagesList = [
        {
            title: "Movie Search App",
            description:"React and Bootstrap CSS application for searching for movies with the OMDB API.",
            link:"https://kattisa.github.io/movie-app/"
        },
        {
            title: "Marvel Search App",
            description:"React and Semantic UI CSS application for searching Marvel characters using the Marvel API.",
            link:"https://kattisa.github.io/marvel-search/"
        }
    ]

    const arrowBox = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16"
                 height="16"
                 fill="#eaddec"
                 className="bi bi-arrow-up-right-square"
                 viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
            </svg>
        );
    }
    return (
        <div className="pages" id="pages">
            <h2>My pages</h2>
            <p>Discover some of my different projects.</p>

            <div className="row">
                {pagesList.map((page, index) => (
                    <div className="column" key={index}>
                        <div className="basicCard pageCard">
                            <h3 className="cardTitle">{page.title}</h3>
                            <div className="content">{page.description}</div>
                            <a href={page.link} className="button">  Visit page {arrowBox()}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pages;