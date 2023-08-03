import React, {useState} from 'react';
import "./pages.scss";

function Pages() {
    return (
        <div className="pages" id="pages">
            <h2>Responsive Column Cards</h2>
            <p>Resize the browser window to see the effect.</p>

            <div className="row">
                <div className="column">
                    <div className="card">
                        <h3>Card 1</h3>
                        <p>Discover the world of movies with our captivating Movie Search App!
                            Powered by the OMDB API, this React-based application allows you to
                            effortlessly explore an extensive database of films. With a user-friendly
                            interface crafted using Bootstrap, you can search for your favorite movies,
                            access detailed information, and even watch trailers.
                            Experience the magic of cinema at your fingertips, as our app delivers
                            an immersive movie-watching journey like never before!</p>
                        <p>Some text</p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Card 2</h3>
                        <p>Some text</p>
                        <p>Some text</p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Card 3</h3>
                        <p>Some text</p>
                        <p>Some text</p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <h3>Card 4</h3>
                        <p>Some text</p>
                        <p>Some text</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pages;