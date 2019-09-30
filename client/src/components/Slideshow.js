import React, { Component } from 'react';
import Button from './Button';
import './style/Slideshow.css';

class Slideshow extends Component {
    render() {
        return (

            <div>
                <div 
                    style={landingHeader}
                >
                    <h1 style={headerStyle}>Welcome to our official website</h1>
                    <Button to={'/players'}/>
                </div>
                <ul className="slideshow">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}

const headerStyle = {
    color: '#fff',
    zIndex: 1,
}

const landingHeader = {
    zIndex: 1,
    position: 'relative',
    textAlign: 'center',
    paddingTop: '20vh'
}

export default Slideshow;