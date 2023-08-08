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
    return (
        <div className="pages" id="pages">
            <h2>My pages</h2>
            <p>Discover some of my different projects.</p>

            <div className="row">
                {pagesList.map((page, index) => (
                    <div className="column" key={index}>
                        <div className="basicCard pageCard">
                            <h3>{page.title}</h3>
                            <p>{page.description}</p>
                            <a href={page.link} className="button">Visit page</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pages;