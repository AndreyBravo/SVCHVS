import React from 'react';
import '../index.css';

const Header = () =>{
    return(
        <div className="ishop-header">
            <div className="ishop-header-logo">
                <img src='/images/logo.png' alt="logo"></img>
            </div>
            <h1>T-Shorts</h1>
            
        </div>
    );
}

export { Header };
