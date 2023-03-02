import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () =>{
    return(
        <div className="page blog">
            <h2>Block page</h2>
            <h2>This is a page that will contain interesting information related to the store</h2>
            <nav>If you want return to home pahe click <Link to="/">Home</Link></nav>
        </div>
    );
}

export { BlogPage };