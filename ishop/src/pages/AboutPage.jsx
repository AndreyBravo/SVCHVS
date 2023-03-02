import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () =>{
    return(
        <div className="page about">
            <h2>About page</h2>
            <h2>This is a page that will contain all the information about us: news in the world of T-Short, information about new branches and much more</h2>
            <nav>If you want return to home pahe click <Link to="/">Home</Link></nav>
        </div>
    );
}

export { AboutPage };